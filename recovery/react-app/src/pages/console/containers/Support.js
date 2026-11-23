import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-935.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module3645 from "unpacked/module-3645.js";
import module3646 from "unpacked/module-3646.js";
import module1779 from "unpacked/module-1779.js";
import module1780 from "unpacked/module-1780.js";
import module1781 from "unpacked/module-1781.js";
import { ReactComponent } from "unpacked/module-3647.js";
import { ReactComponent as ReactComponent_1 } from "unpacked/module-3648.js";
import module3649 from "unpacked/module-3649.js";
export default function() {
    return <div className={module3649.layout}><div className={module3649.wrapper}><div className={module3649.about}><div className={module3649.open}><div className={module3649.container}><div className={module3649.title}>{t("COMMUNITY_SUPPORT")}</div><div className={module3649.circleButtons}>{A.map((M)=><a rel="noopener noreferrer" target="_blank" className={module3649.circleButton} key={M.title} href={M.link}>{typeof M.icon === "string" ? <module186.Icon name={M.icon} size={20}/> : <span className="icon"><M.icon className="kubed-icon kubed-icon-dark" style={{
            width: 20,
            height: 20
        }}/></span>}<span className={module3649.buttonText}>{t(M.title)}</span></a>)}</div></div><div className={module3649.buttons}><a className={module3649.button} href={supportLinks.github} target="_blank" rel="noopener noreferrer"><module186.Icon name="github" size={20} color={{
        primary: "inherit"
    }}/><span className={module3649.smallButtonText}>{t("REPS_ADDRESS")}</span></a><OComponent/><a className={module3649.button} href={supportLinks.githubPr} target="_blank" rel="noopener noreferrer"><module186.Icon name="git" size={20} color={{
        primary: "#329DCE"
    }}/><span className={module3649.smallButtonText}>{t("CODE_CONTRIBUTE")}</span></a><OComponent/><a className={module3649.button} href={supportLinks.star} target="_blank" rel="noopener noreferrer"><module186.Icon name="star" size={20} color={{
        primary: "#F5A623"
    }}/><span className={module3649.smallButtonText}>{t("GITHUB_STAR")}</span></a></div></div><a className={module3649.ticket} href={supportLinks.contactUs} target="_blank" rel="noopener noreferrer"><div className={module3649.title}>{t("TICKET_SUPPORT")}</div><div className={module3649.desc}>{t("TICKET_SUPPORT_DESC")}</div><div className={module3649.link}><span>{t("CONTACT_US")}</span><module186.Icon name="next" color={{
        primary: "inherit",
        secondary: "inherit"
    }}/></div></a></div><div className={module3(module3649.card, module3649.kse)}><div className={module3(module3649.header, module3649.headerWithPadding)}><img src={module3645} alt="logo"/><a className={module3(module3649.buttonText, "support-action")} href={supportLinks.kseLink} target="_blank" rel="noopener noreferrer">{t("LEARN_MORE")}</a></div><div className={module3649.content}><div><div className={module3649.title}>{t("KUBESPHERE_ENTERPRISE_CAPTION")}</div><div className={module3649.desc}>{t("KUBE_SPHERE_ENTERPRISE_DESC")}</div><div className={module3649.features}>{o.map((M)=><div className={module3649.feature} key={M.title}><img src={M.icon} alt={M.title}/><div className={module3649.featureTitle}>{t(M.title)}</div></div>)}</div></div><div className={module3649.kseBg}/></div></div><div className={module3(module3649.card, module3649.ksc)}><div className={module3649.header}><img src={module3646} alt="ks-cloud"/><a className={module3(module3649.buttonText, "support-action")} href={supportLinks.kscLink} target="_blank" rel="noopener noreferrer">{t("LEARN_MORE")}</a></div><div className={module3649.title}>{t("KUBESPHERE_CLOUD_CAPTION")}</div><div className={module3649.desc}>{t("KUBESPHERE_CLOUD_DESC")}</div><div className={module3649.features}>{y.map((M)=><a className={module3649.feature} key={M.title} href={M.link} target="_blank" rel="noopener noreferrer" style={{
            backgroundImage: `url("${M.img}")`
        }}><div className={module3649.title}>{t(M.title)}</div><div>{M.desc.map((M, key)=><div className={module3649.descRow} key={key}>{t(M)}</div>)}</div><div className={module3649.buttonText}><span>{t("START_NOW")}</span><module186.Icon name="next" color={{
            primary: "inherit",
            secondary: "inherit"
        }}/></div></a>)}</div></div><div className={module3649.footer}>{t.html("LEARN_MORE_CONTACT_US")}</div></div></div>;
};
var supportLinks = globals.config.supportLinks;
var A = [
    {
        icon: "documentation",
        title: "DOCUMENTATION",
        link: supportLinks.doc
    },
    {
        icon: ReactComponent_1,
        title: "FORUM",
        link: supportLinks.forum
    },
    {
        icon: "github",
        title: "ISSUE_PL",
        link: supportLinks.issues
    },
    {
        icon: ReactComponent,
        title: "SLACK",
        link: supportLinks.slack
    }
];
var o = [
    {
        icon: module1779,
        title: "KSE_FEATURE_1"
    },
    {
        icon: module1780,
        title: "KSE_FEATURE_2"
    },
    {
        icon: module1781,
        title: "KSE_FEATURE_3"
    }
];
var y = [
    {
        title: "KSC_FEATURE_BACKUP",
        desc: [
            "KSC_FEATURE_BACKUP_APP_DESC",
            "KSC_FEATURE_BACKUP_DATA_DESC",
            "KSC_FEATURE_BACKUP_CLOUD_DESC"
        ],
        img: "/assets/support-backup.svg",
        link: supportLinks.backup
    },
    {
        title: "KSC_FEATURE_INSPECTION",
        desc: [
            "KSC_FEATURE_INSPECTION_VULN_DESC",
            "KSC_FEATURE_INSPECTION_SECURITY_DESC",
            "KSC_FEATURE_INSPECTION_BEST_DESC"
        ],
        img: "/assets/support-cluster-inspection.svg",
        link: supportLinks.inspection
    },
    {
        title: "KSC_FEATURE_LIGHTWEIGHT",
        desc: [
            "KSC_FEATURE_LIGHTWEIGHT_START_DESC",
            "KSC_FEATURE_LIGHTWEIGHT_KS_DESC",
            "KSC_FEATURE_LIGHTWEIGHT_TEST_DESC"
        ],
        img: "/assets/support-light-cluster.svg",
        link: supportLinks.light
    }
];
function OComponent() {
    return <div className={module3649.divider}/>;
}
