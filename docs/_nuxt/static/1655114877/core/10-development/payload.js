__NUXT_JSONP__("/core/10-development", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:[{document:{slug:"10-development",description:"",title:"Local Development",position:10,category:"Policy Reporter",toc:[{id:z,depth:x,text:A},{id:B,depth:x,text:C},{id:D,depth:t,text:E},{id:F,depth:t,text:G},{id:H,depth:x,text:I},{id:J,depth:t,text:K},{id:L,depth:t,text:M}],body:{type:"root",children:[{type:a,tag:y,props:{id:z},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#requirements",tabIndex:i},children:[{type:a,tag:f,props:{className:[j,k]},children:[]}]},{type:b,value:A}]},{type:b,value:e},{type:a,tag:"ul",props:{},children:[{type:b,value:e},{type:a,tag:N,props:{},children:[{type:b,value:"Go \u003E= v1.17"}]},{type:b,value:e},{type:a,tag:N,props:{},children:[{type:b,value:"(optional) Kubernetes Cluster with "},{type:a,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fkubernetes-sigs\u002Fwg-policy-prototypes\u002Ftree\u002Fmaster\u002Fpolicy-report\u002Fcrd\u002Fv1alpha2"},children:[{type:b,value:"wgpolicyk8s.io CRDs"}]},{type:b,value:" installed"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:y,props:{id:B},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#getting-started",tabIndex:i},children:[{type:a,tag:f,props:{className:[j,k]},children:[]}]},{type:b,value:C}]},{type:b,value:e},{type:a,tag:u,props:{},children:[{type:b,value:"Fork and\u002For checkout "},{type:a,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter",target:O},children:[{type:b,value:"Policy Reporter on GitHub"}]}]},{type:b,value:e},{type:a,tag:v,props:{id:D},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#install-dependencies",tabIndex:i},children:[{type:a,tag:f,props:{className:[j,k]},children:[]}]},{type:b,value:E}]},{type:b,value:e},{type:a,tag:o,props:{className:[p]},children:[{type:a,tag:q,props:{className:[r,s]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"go get .\u002F"},{type:a,tag:f,props:{className:[l,P]},children:[{type:b,value:Q}]},{type:b,value:".\n"}]}]}]},{type:b,value:e},{type:a,tag:v,props:{id:F},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#unit-tests",tabIndex:i},children:[{type:a,tag:f,props:{className:[j,k]},children:[]}]},{type:b,value:G}]},{type:b,value:e},{type:a,tag:u,props:{},children:[{type:b,value:"Run unit tests locally with"}]},{type:b,value:e},{type:a,tag:o,props:{className:[p]},children:[{type:a,tag:q,props:{className:[r,s]},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{className:[l,R]},children:[{type:b,value:S}]},{type:b,value:" "},{type:a,tag:f,props:{className:[l,T,U]},children:[{type:b,value:V}]},{type:b,value:e}]}]}]},{type:b,value:e},{type:a,tag:u,props:{},children:[{type:b,value:"or"}]},{type:b,value:e},{type:a,tag:o,props:{className:[p]},children:[{type:a,tag:q,props:{className:[r,s]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"go "},{type:a,tag:f,props:{className:[l,T,U]},children:[{type:b,value:V}]},{type:b,value:" -v .\u002F"},{type:a,tag:f,props:{className:[l,P]},children:[{type:b,value:Q}]},{type:b,value:". -timeout"},{type:a,tag:f,props:{className:[l,"operator"]},children:[{type:b,value:"="}]},{type:b,value:"10s\n"}]}]}]},{type:b,value:e},{type:a,tag:y,props:{id:H},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#running-policy-reporter",tabIndex:i},children:[{type:a,tag:f,props:{className:[j,k]},children:[]}]},{type:b,value:I}]},{type:b,value:e},{type:a,tag:u,props:{},children:[{type:b,value:"To run Policy Reporter locally, you must connect it to a Kubernetes cluster. This is required because it connects to the Kubernetes API to watch for PolicyReports and ClusterPolicyReports. The configuration can be done via CLI arguments, "},{type:a,tag:"nuxt-link",props:{target:O,to:W},children:[{type:b,value:X}]},{type:b,value:", or a mix of both."}]},{type:b,value:e},{type:a,tag:o,props:{className:[p]},children:[{type:a,tag:q,props:{className:[r,s]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"go run main.go run -k ~\u002F.kube\u002Fconfig\n"}]}]}]},{type:b,value:e},{type:a,tag:v,props:{id:J},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#argument-reference",tabIndex:i},children:[{type:a,tag:f,props:{className:[j,k]},children:[]}]},{type:b,value:K}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:"table",props:{},children:[{type:a,tag:"thead",props:{},children:[{type:a,tag:m,props:{},children:[{type:a,tag:w,props:{},children:[{type:b,value:"Argument"}]},{type:a,tag:w,props:{align:n},children:[{type:b,value:"Short"}]},{type:a,tag:w,props:{},children:[{type:b,value:"Description"}]},{type:a,tag:w,props:{},children:[{type:b,value:"Default"}]}]}]},{type:a,tag:"tbody",props:{},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"--kubeconfig"}]}]},{type:a,tag:c,props:{align:n},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-k"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"path to the kubeconfig file,"},{type:a,tag:"br",props:{},children:[]},{type:b,value:"used to connect to the Kubernetes API"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"--config"}]}]},{type:a,tag:c,props:{align:n},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-c"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"path to the Policy Reporter config file"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:X}]}]}]},{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"--dbfile"}]}]},{type:a,tag:c,props:{align:n},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-d"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"path to the SQLite database file"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"sqlite-database.db"}]}]}]},{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"--metrics-enabled"}]}]},{type:a,tag:c,props:{align:n},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-m"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"enables the Metrics API endpoints"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:Y}]}]}]},{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"--rest-enabled"}]}]},{type:a,tag:c,props:{align:n},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-r"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"enables the REST API endpoints"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:Y}]}]}]},{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"--port"}]}]},{type:a,tag:c,props:{align:n},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-p"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"used port for the HTTP server"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"8080"}]}]}]}]}]},{type:b,value:e},{type:a,tag:v,props:{id:L},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#compile-and-run-policy-reporter",tabIndex:i},children:[{type:a,tag:f,props:{className:[j,k]},children:[]}]},{type:b,value:M}]},{type:b,value:e},{type:a,tag:o,props:{className:[p]},children:[{type:a,tag:q,props:{className:[r,s]},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{className:[l,R]},children:[{type:b,value:S}]},{type:b,value:" build\n\n.\u002Fbuild\u002Fpolicyreporter run -k ~\u002F.kube\u002Fconfig\n"}]}]}]}]},dir:"\u002Fen\u002Fcore",path:"\u002Fen\u002Fcore\u002F10-development",extension:".md",createdAt:Z,updatedAt:Z,to:"\u002Fcore\u002F10-development"},prev:{title:"Report Filter",path:"\u002Fen\u002Fcore\u002F09-report-filter",to:"\u002Fcore\u002F09-report-filter"},next:{title:"Config Reference",path:"\u002Fen\u002Fcore\u002F11-config-reference",to:W}}],fetch:{},mutations:[]}}("element","text","td","code","\n","span","a","true",-1,"icon","icon-link","token","tr","center","div","nuxt-content-highlight","pre","language-bash","line-numbers",3,"p","h3","th",2,"h2","requirements","Requirements","getting-started","Getting started","install-dependencies","Install dependencies","unit-tests","Unit Tests","running-policy-reporter","Running Policy Reporter","argument-reference","Argument Reference","compile-and-run-policy-reporter","Compile and run Policy Reporter","li","_blank","punctuation","..","function","make","builtin","class-name","test","\u002Fcore\u002F11-config-reference","config.yaml","false","2022-06-13T10:06:49.594Z")));