window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {staticAssetsBase:"\u002Fpolicy-reporter\u002F_nuxt\u002Fstatic\u002F1651525179",layout:"default",error:l,state:{categories:{en:{"":[{slug:"index",title:"Introduction",to:"\u002F",category:d}],Guide:[{slug:"02-getting-started",title:"Getting started",category:b,to:m},{slug:"03-architecture",title:"Architecture",category:b,to:"\u002Fguide\u002F03-architecture"},{slug:"04-helm-chart-core",title:"Helm Chart",category:b,to:"\u002Fguide\u002F04-helm-chart-core"},{slug:"05-migration",title:"Migration Guide",category:b,to:"\u002Fguide\u002F05-migration"},{slug:"06-troubleshooting",title:"Troubleshooting",category:b,to:"\u002Fguide\u002F06-troubleshooting"}],"Policy Reporter":[{slug:"06-targets",title:"Targets",category:a,to:"\u002Fcore\u002F06-targets"},{slug:"07-api-reference",title:e,category:a,to:"\u002Fcore\u002F07-api-reference"},{slug:"08-priority-mapping",title:"Priority Mapping",category:a,to:"\u002Fcore\u002F08-priority-mapping"},{slug:"09-report-filter",title:"Report Filter",category:a,to:"\u002Fcore\u002F09-report-filter"},{slug:"10-development",title:f,category:a,to:"\u002Fcore\u002F10-development"},{slug:"11-config-reference",title:g,category:a,to:"\u002Fcore\u002F11-config-reference"}],"Policy Reporter UI":[{slug:"11-api-reference",title:e,category:h,to:"\u002Fui\u002F11-api-reference"},{slug:"12-development",title:f,category:h,to:"\u002Fui\u002F12-development"},{slug:"13-config-reference",title:g,category:h,to:"\u002Fui\u002F13-config-reference"}],"Kyverno Plugin":[{slug:"14-api-reference",title:e,category:i,to:"\u002Fkyverno-plugin\u002F14-api-reference"},{slug:"15-development",title:f,category:i,to:"\u002Fkyverno-plugin\u002F15-development"},{slug:"16-config-reference",title:g,category:i,to:"\u002Fkyverno-plugin\u002F16-config-reference"}],Community:[{slug:"releases",title:"Releases",category:"Community",to:"\u002Freleases"}]}},releases:[{name:"policy-reporter-2.8.0",date:"2022-04-30T17:59:25Z",body:"\u003Cp\u003ENew \u003Ccode\u003Efilters\u003C\u002Fcode\u003E property for targets configuration\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Efilter results send to a configured target by exclude and include rules for namesapces, priorities and policies\u003C\u002Fli\u003E\n\u003Cli\u003Esupports wildcards for policies and namespaces\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ENew \u003Ccode\u003Echannels\u003C\u002Fcode\u003E property for targets configuration\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Echannels allow you to define multiple configurations of the same type of target. Thus, in combination with filters, you can route your notifications to different target configurations. Channels have the same configuration properties as the root target configuration.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ESee the \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fcore\u002F06-targets\"\u003EDocumentation\u003C\u002Fa\u003E for more details and examples.\u003C\u002Fp\u003E\n\u003Cp\u003ENew \u003Cstrong\u003Ewebhook\u003C\u002Fstrong\u003E target\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Ethis target is a simple way to send notifications to custom tools and APIs\u003C\u002Fli\u003E\n\u003Cli\u003Eresults are send as POST requests with a JSON representation of the result\u003C\u002Fli\u003E\n\u003Cli\u003Ethe headers properties allows you to send custom header with the request to allow for example authentication\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.7.1",date:"2022-03-27T12:55:46Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd Resource APIVersion to the Results REST APIs\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.7.0",date:"2022-03-20T22:14:16Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EPolicyReport Filter:\u003Cul\u003E\n\u003Cli\u003EPolicyReporter CRD Filter by Namespaces\u003C\u002Fli\u003E\n\u003Cli\u003EDisable ClusterPolicyReport CRD processing\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ESee \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fcore\u002F09-report-filter\"\u003EReport Filter\u003C\u002Fa\u003E Documentation for details\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.6.3",date:"2022-03-16T23:04:35Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EFix Debouncer has wrong reference to OldPolicyReport when a result was cached.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.6.2",date:"2022-03-12T10:53:54Z",body:"\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.8\u003C\u002Fli\u003E\n\u003Cli\u003EAdd \u003Ccode\u003EserviceMonitor.relabelings\u003C\u002Fcode\u003E and \u003Ccode\u003EserviceMonitor.metricRelabelings\u003C\u002Fcode\u003E for ServiceMonitor configuration in the \u003Ccode\u003Emonitoring\u003C\u002Fcode\u003E Subchart.\u003C\u002Fli\u003E\n\u003Cli\u003EAdd \u003Ccode\u003Ekyverno.serviceMonitor.relabelings\u003C\u002Fcode\u003E and \u003Ccode\u003Ekyverno.serviceMonitor.metricRelabelings\u003C\u002Fcode\u003E for the KyvernoPlugin ServiceMonitor configuration in the \u003Ccode\u003Emonitoring\u003C\u002Fcode\u003E Subchart.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.8\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter KyvernoPlugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.8\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.6.1",date:"2022-03-10T12:10:27Z",body:"\u003Cp\u003EUpdate Policy Reporter UI to v1.3.2\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003ESupport access over Subpaths, e.g. Rancher Reverse Proxy\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EUpdate Policy Reporter Monitoring to v2.1.0\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EFix Failing ClusterPolicyRules Columns of the PolicyReports Dashboard\u003C\u002Fli\u003E\n\u003Cli\u003EAdd Filter to the PolicyReports Dashboard\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.6.0",date:"2022-02-28T13:27:09Z",body:"\u003Cp\u003EAdd seccomp profile support [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F120\"\u003E#120\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Feddycharly\"\u003Eeddycharly\u003C\u002Fa\u003E]\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.5.0",date:"2022-02-27T16:47:35Z",body:"\u003Cp\u003ENew Policy Reporter API to get a list of available resources\nNew Filter for Policies, Kinds, Categories and Results APIs\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.4.0",date:"2022-02-25T10:20:05Z",body:"\u003Cp\u003EAdd Support for custom Loki labels\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.3.0",date:"2022-02-22T12:35:05Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd Support for linux\u002Fs390x [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F115\"\u003E#115\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fskuethe\"\u003Eskuethe\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd Support for linux\u002Fs390x [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-ui\u002Fpull\u002F98\"\u003E#98\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fskuethe\"\u003Eskuethe\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter KyvernoPlugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd Support for linux\u002Fs390x [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-kyverno-plugin\u002Fpull\u002F13\"\u003E#13\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fskuethe\"\u003Eskuethe\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.2.6",date:"2022-02-17T14:10:56Z",body:"\u003Cp\u003EUse upper case on drop capabilities [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F113\"\u003E#113\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fskuethe\"\u003Eskuethe\u003C\u002Fa\u003E]\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.2.5",date:"2022-02-17T11:18:32Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.6 [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F110\"\u003E#110\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frealshuting\"\u003Erealshuting\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate Helm Chart with new component versions\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate dependencies\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.6 [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-ui\u002Fpull\u002F93\"\u003E#93\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frealshuting\"\u003Erealshuting\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate dependencies\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter KyvernoPlugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.6 [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-kyverno-plugin\u002Fpull\u002F12\"\u003E#12\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frealshuting\"\u003Erealshuting\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.2.4",date:"2022-02-15T22:11:10Z",body:"\u003Cp\u003EFix PolicyReport Mapper - string casting\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.2.3",date:"2022-01-28T19:26:41Z",body:"\u003Cp\u003EFix Helm Chart uihost template function.\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.2.2",date:"2022-01-21T09:54:37Z",body:"\u003Cp\u003EFix Helm Chart values.yaml. Cleanup unused default configurations. [#103 by AndersBennedsgaard]\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.2.1",date:"2022-01-14T11:01:56Z",body:"\u003Cp\u003EFix Typo in values.yaml [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-ui\u002Fpull\u002F102\"\u003E#102\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fchristophefromparis\"\u003Echristophefromparis\u003C\u002Fa\u003E]\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.2.0",date:"2022-01-08T11:15:56Z",body:"\u003Cul\u003E\n\u003Cli\u003EPolicy Reporter UI v1.2.0\u003Cul\u003E\n\u003Cli\u003ENew configurations to customize the dashboard by disable PolicyReport- or ClusterPolicyReport information\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.1.1",date:"2021-12-28T18:54:48Z",body:"\u003Cul\u003E\n\u003Cli\u003EFix KyvernoPlugin Metrics ServiceMonitor Port [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-ui\u002Fpull\u002F96\"\u003E#96\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fz0rc\"\u003Ez0rc\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003Cli\u003ERemove unused Port from KyvernoPlugin Deployment and Service\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.1.0",date:"2021-12-22T13:42:14Z",body:"\u003Cul\u003E\n\u003Cli\u003EKyvernoPlugin v1.1.0\u003Cul\u003E\n\u003Cli\u003ENew KyvernoPlugin API - VerifyImages Rules (\u003Ca href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fkyverno-plugin\u002F14-api-reference#verifyimage-rules-api\" target=\"_blank\"\u003Edetails\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter UI v1.1.0\u003Cul\u003E\n\u003Cli\u003ENew Kyverno VerifyImages view in Policy Reporter UI\u003C\u002Fli\u003E\n\u003Cli\u003ENew Configurations to disable views (\u003Ca href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fguide\u002F04-helm-chart-core#configure-views\" target=\"_blank\"\u003Edetails\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.0.1",date:"2021-12-17T12:26:33Z",body:"\u003Cul\u003E\n\u003Cli\u003ERemove NetworkPolicy ingress rule for UI if not enabled\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate Policy Reporter UI\u003Cul\u003E\n\u003Cli\u003EFix: Show PolicyReportResult Properties in Tables\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.0.0",date:"2021-12-13T16:19:49Z",body:"\u003Ch2 id=\"chart\"\u003EChart\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003ERemoved deprecated values \u003Ccode\u003EcrdVersion\u003C\u002Fcode\u003E, \u003Ccode\u003EcleanupDebounceTime\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003ESimplify \u003Ccode\u003EpolicyPriorities\u003C\u002Fcode\u003E, \u003Ccode\u003EpolicyPriorities.enabled\u003C\u002Fcode\u003E was removed along with the watch feature\u003Cul\u003E\n\u003Cli\u003EPriority determined mainly over severity\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAdd \u003Ccode\u003Esources\u003C\u002Fcode\u003E filter to target configurations\u003C\u002Fli\u003E\n\u003Cli\u003EImproved \u003Ccode\u003ENetworkPolicy\u003C\u002Fcode\u003E configuration for all components\u003C\u002Fli\u003E\n\u003Cli\u003EMetrics now an optional feature\u003C\u002Fli\u003E\n\u003Cli\u003EEach component expose a single Port \u003Ccode\u003E8080\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ESee \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fguide\u002F05-migration\"\u003EMigration Docs\u003C\u002Fa\u003E for details\u003C\u002Fp\u003E\n\u003Ch2 id=\"policy-reporter\"\u003EPolicy Reporter\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Emodular functions for separate activation\u002Fdeactivation\u003Cul\u003E\n\u003Cli\u003EREST API\u003C\u002Fli\u003E\n\u003Cli\u003EMetrics API\u003C\u002Fli\u003E\n\u003Cli\u003ETarget pushes\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EPolicyReports are now stored in an internal SQLite\u003C\u002Fli\u003E\n\u003Cli\u003Eextended REST API based on the new SQLite DB for filters and grouping of data\u003C\u002Fli\u003E\n\u003Cli\u003Emetrics API is now optional\u003C\u002Fli\u003E\n\u003Cli\u003Emetrics and REST API using the same HTTP Server (were separated before)\u003C\u002Fli\u003E\n\u003Cli\u003Eimproved CRD watch logic with Kubernetes client informer\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003EYandex\u003C\u002Fcode\u003E changed to a general \u003Ccode\u003ES3\u003C\u002Fcode\u003E target.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"policy-reporter-ui\"\u003EPolicy Reporter UI\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003ERewrite with NuxtJS\u003C\u002Fli\u003E\n\u003Cli\u003ENew dark mode\u003C\u002Fli\u003E\n\u003Cli\u003ESimplified Proxy\u003C\u002Fli\u003E\n\u003Cli\u003EImproved SPA file handling\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"policy-reporter-kyverno-plugin\"\u003EPolicy Reporter Kyverno Plugin\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Emodular functions for separate activation\u002Fdeactivation\u003Cul\u003E\n\u003Cli\u003EREST API\u003C\u002Fli\u003E\n\u003Cli\u003EMetrics API\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003Emetrics and REST API using the same HTTP Server (were separated before)\u003C\u002Fli\u003E\n\u003Cli\u003Eimproved CRD watch logic with Kubernetes client informer\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-1.12.6",date:"2021-11-11T10:25:56Z",body:c},{name:"policy-reporter-1.12.5",date:"2021-10-21T20:46:20Z",body:c},{name:"policy-reporter-1.12.4",date:"2021-10-19T08:42:05Z",body:c},{name:"policy-reporter-1.12.3",date:"2021-10-18T20:31:15Z",body:c},{name:"policy-reporter-1.12.2",date:"2021-10-18T16:41:40Z",body:c},{name:"policy-reporter-1.12.0",date:"2021-10-13T20:32:17Z",body:j},{name:"policy-reporter-1.11.0",date:"2021-09-29T21:42:15Z",body:j},{name:"policy-reporter-1.10.1",date:"2021-09-29T16:44:20Z",body:j},{name:"policy-reporter-1.10.0",date:"2021-09-27T08:11:53Z",body:"\u003Cul\u003E\n\u003Cli\u003ECurrent and all new versions of all components are now hosted in the Github Container Registry alongside the Kyverno images\u003C\u002Fli\u003E\n\u003Cli\u003EUpdated the Go Verison of all Components to Go 1.17\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter UI Filters are now added as GET Parameters which makes filtering shareable over links\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"}],settings:{title:a,url:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter",defaultDir:d,defaultBranch:"main",filled:k,logo:{light:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fimages\u002Flogo-light.png",dark:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fimages\u002Flogo-dark.png"},github:"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-docs",githubApi:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Fkyverno\u002Fpolicy-reporter",menuTitle:a,category:d},menu:{open:n},i18n:{routeParams:{}}},serverRendered:k,routePath:m,config:{_app:{basePath:"\u002Fpolicy-reporter\u002F",assetsPath:"\u002Fpolicy-reporter\u002F_nuxt\u002F",cdnURL:l},content:{dbHash:"d05f9fbf"}},__i18n:{langs:{}},colorMode:{preference:o,value:o,unknown:k,forced:n}}}("Policy Reporter","Guide","\u003Cp\u003EPolicy Reporter watches for PolicyReport Resources. It creates Prometheus Metrics and can send rule validation events to different targets like Loki, Elasticsearch, Slack or Discord \u003C\u002Fp\u003E\n","","API Reference","Local Development","Config Reference","Policy Reporter UI","Kyverno Plugin","\u003Cp\u003EK8s PolicyReporter watches for wgpolicyk8s.io\u002Fv1alpha1.PolicyReport resources. It creates Prometheus Metrics and can send rule validation events to different targets like Loki, Elasticsearch, Slack or Discord \u003C\u002Fp\u003E\n",true,null,"\u002Fguide\u002F02-getting-started",false,"system"));