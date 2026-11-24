#!/usr/bin/env python3
import socket
import threading
import unittest

from phase5_ws_helpers import (
    close_quietly,
    parse_status_code,
    pump_socket,
    read_http_headers,
    should_proxy_websocket,
)


class WebsocketHelperTests(unittest.TestCase):
    def test_terminal_prefix_only(self):
        self.assertTrue(
            should_proxy_websocket(
                "/kapis/terminal.kubesphere.io/v1alpha2/namespaces/ns/pods/p/exec"
            )
        )
        self.assertFalse(should_proxy_websocket("/kapis/iam.kubesphere.io/v1beta1/users/x"))
        self.assertFalse(should_proxy_websocket("/apis/apps/v1/namespaces/ns/deployments"))
        self.assertFalse(should_proxy_websocket("/api/v1/namespaces/ns/pods"))
        self.assertFalse(should_proxy_websocket("/oauth/token"))
        self.assertFalse(should_proxy_websocket(""))

    def test_parse_101_and_non_101(self):
        self.assertEqual(
            parse_status_code(b"HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket"),
            101,
        )
        self.assertEqual(parse_status_code(b"HTTP/1.1 400 Bad Request"), 400)

    def test_read_handshake_keeps_rest(self):
        server, client = socket.socketpair()
        self.addCleanup(lambda: close_quietly(server))
        self.addCleanup(lambda: close_quietly(client))
        server.sendall(b"HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\n\r\nXYZ")
        header, rest = read_http_headers(client)
        self.assertEqual(parse_status_code(header), 101)
        self.assertEqual(rest, b"XYZ")

    def test_read_handshake_times_out(self):
        server, client = socket.socketpair()
        self.addCleanup(lambda: close_quietly(server))
        self.addCleanup(lambda: close_quietly(client))
        client.settimeout(0.2)
        with self.assertRaises((socket.timeout, TimeoutError, OSError)):
            read_http_headers(client)

    def test_pump_exits_when_source_closes(self):
        src_a, src_b = socket.socketpair()
        dst_a, dst_b = socket.socketpair()
        self.addCleanup(lambda: close_quietly(src_a))
        self.addCleanup(lambda: close_quietly(src_b))
        self.addCleanup(lambda: close_quietly(dst_a))
        self.addCleanup(lambda: close_quietly(dst_b))
        thread = threading.Thread(target=pump_socket, args=(src_a, dst_a), daemon=True)
        thread.start()
        src_b.sendall(b"hi")
        self.assertEqual(dst_b.recv(2), b"hi")
        src_b.close()
        thread.join(2)
        self.assertFalse(thread.is_alive())


if __name__ == "__main__":
    unittest.main()
