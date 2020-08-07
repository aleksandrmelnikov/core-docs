/*! For license information please see 2a63488e.60faea0b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return m}));var n=t(2),o=t(6),i=(t(0),t(153)),r=t(159),c=t(158),s={title:"Configuration files",sidebar_label:"Configuration files",description:"Onepanel provider specific configuration files"},l={id:"deployment/configuration/files",title:"Configuration files",description:"Onepanel provider specific configuration files",source:"@site/docs/deployment/configuration/files.md",permalink:"/docs/deployment/configuration/files",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/configuration/files.md",sidebar_label:"Configuration files",sidebar:"deployment",previous:{title:"CLI overview",permalink:"/docs/deployment/configuration/cli"},next:{title:"TLS certificates",permalink:"/docs/deployment/configuration/tls"}},b=[{value:"Content of configuration file <code>params.yaml</code>",id:"content-of-configuration-file-paramsyaml",children:[]},{value:"Sections",id:"sections",children:[{value:"application",id:"application",children:[]},{value:"artifactRepository",id:"artifactrepository",children:[]},{value:"certManager",id:"certmanager",children:[]},{value:"database",id:"database",children:[]},{value:"metalLB",id:"metallb",children:[]},{value:"workflowEngine",id:"workflowengine",children:[]},{value:"services",id:"services",children:[]}]}],p={rightToc:b};function m(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two files generated after running ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init --provider <provider>"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"params.yaml")," - contains the fields that need to be updated to configure your deployment."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.yaml")," - contains components that are going to be included in the deployment. This file ",Object(i.b)("strong",{parentName:"li"},"should not")," be updated unless you plan on adding custom Kustomize components to your deployment.")),Object(i.b)("p",null,"For further information on populating the ",Object(i.b)("inlineCode",{parentName:"p"},"params.yaml")," file, refer to the sections below. This information is also available inside the generated ",Object(i.b)("inlineCode",{parentName:"p"},"params.yaml")," template."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is highly recommended that you commit ",Object(i.b)("inlineCode",{parentName:"p"},"params.yaml")," file into a private repository and encrypt it with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/StackExchange/blackbox"}),"BlackBox")," or use a secret management service like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/key-vault/"}),"Azure Key Vault"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/secrets-manager/"}),"AWS Secret Manager"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/secret-manager"}),"GCP Secret Manager")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.vaultproject.io/"}),"HashiCorp Vault"),"."))),Object(i.b)("h2",{id:"content-of-configuration-file-paramsyaml"},"Content of configuration file ",Object(i.b)("inlineCode",{parentName:"h2"},"params.yaml")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The template below is automatically generated when your run ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init")," for your provider."),Object(i.b)("p",{parentName:"div"},"This particular one was generated by running "),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"opctl init --provider aks --enable-https --enable-cert-manager --dns-provider route53\n")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Component: Onepanel\n# Description: Onepanel application information\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\napplication:\n  # First namespace that will be created in Onepanel, more can be added later\n  defaultNamespace: default\n  # Domain where Onepanel is hosted\n  # Use a first-level or multi-level subdomain like example.com or sub.example.com\n  domain: <domain>\n  # The Fully Qualified Domain (FQDN) where Onepanel will be hosted.\n  # If `domain` above is set to example.com or sub.example.com, then your FQDN could be: app.example.com or app.sub.example.com respectively\n  fqdn: <fully-qualified-domain-name>\n  # HTTP or HTTPS - Do not change, determined by `opctl init --enable-https`\n  # CLI flag: --enable-https\n  insecure: false\n  # Node pool or group label keys and values used for AutoScaling and for NodeSelectors\n  # The provider will set these label key and values on your nodes automatically\n  # These can also be customized depending on your provider\n  nodePool:\n    label: <node-pool-label>\n    # Add more by following the format:\n    # - name: <name>\n    #   value: <value>\n    # The first option will be used as default.\n    options:\n    - name: 'Use friendly name 1'\n      value: <value-1>\n    - name: 'Use friendly name 2'\n      value: <value-2>\n  # The kubernetes cluster where Onepanel will be deployed.\n  # Valid values: minikube, microk8s, aks, eks, gke\n  provider: aks\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Component: Artifact repository\n# Description: S3 compatible object storage for storing files across Onepanel\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nartifactRepository:\n  s3:\n    # S3 access key\n    accessKey: <access-key>\n    # Name of bucket, example: my-bucket\n    bucket: <bucket-name>\n    # Endpoint for S3 compatible storage\n    # Supported provider endpoints:\n    #   AWS: s3.amazonaws.com\n    #   GCS: storage.googleapis.com\n    #   Minio: my-minio-endpoint.default:9000\n    endpoint: s3.amazonaws.com\n    # Change to true if endpoint does NOT support HTTPS\n    insecure: false\n    # Key Format for objects stored by Workflows. This can reference Workflow variables\n    keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}\n    # Bucket region\n    region: us-west-2\n    # S3 secret key\n    secretKey: <secret-key>\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Component: cert-manager\n# Description: automatically creates and renews TLS certificates using Let's Encrypt\n# Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls\n# CLI flag: --enable-cert-manager\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\ncertManager:\n  # Enter certificate admin email\n  # Example: admin@example.com\n  email: <cert-admin-email>\n  # DNS Provider: Amazon Route53\n  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#route53\n  # CLI flag: --dns-provider=route53\n  route53:\n    access_key: <aws-access-key>\n    region: <aws-region>\n    secret_key: <aws-secret-key>\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Component: Database\n# Description: Database connection information\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\ndatabase:\n  # Name of database\n  # If using an external production database, use the name of that database.\n  # For in-cluster test database, use any name you like.\n  databaseName: onepanel\n  # Do not change, only `postgres` driver is supported at this time.\n  driverName: postgres\n  # Database host - use `postgres` for in-cluster test database\n  host: <database-ip-or-hostname>\n  # Database password\n  # If using an external production database, use the password for that database.\n  # For in-cluster test database, use any password you like.\n  password: <password>\n  # Database port\n  port: 5432\n  # Database username\n  # If using an external production database, use the username for that database.\n  # For in-cluster test database, use any username you like.\n  username: <username>\n")),Object(i.b)("p",null,"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"--artifact-repository-provider gcs"),", that changes the ",Object(i.b)("inlineCode",{parentName:"p"},"artifactRepository"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"artifactRepository:\n gcs:\n    # Name of bucket, example: my-bucket\n    bucket: <bucket-name>\n    # Endpoint for S3 compatible storage\n    # Supported provider endpoints:\n    #   AWS: s3.amazonaws.com\n    #   GCS: storage.googleapis.com\n    #   Minio: my-minio-endpoint.default:9000\n    endpoint: storage.googleapis.com\n    # Change to true if endpoint does NOT support HTTPS\n    insecure: false\n    # Key Format for objects stored by Workflows. This can reference Workflow variables\n    keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}\n    serviceAccountKey: |\n      <key.json-file-data>\n")),Object(i.b)("h2",{id:"sections"},"Sections"),Object(i.b)("p",null,"What follows is a more detailed description of each section of the ",Object(i.b)("inlineCode",{parentName:"p"},"params.yaml")," file."),Object(i.b)("h3",{id:"application"},"application"),Object(i.b)("p",null,"This is where you set the basic application configuration. "),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"insecure")," field is set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," by default and will be set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if you add the ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-https")," when running ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init"),"."),Object(i.b)("h4",{id:"defaultnamespace"},"defaultNamespace"),Object(i.b)("p",null,"This is the first ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/concepts/namespaces"}),"Namespace")," you want created. This could be a project name or a team name. It is set to ",Object(i.b)("inlineCode",{parentName:"p"},"default")," by default but we recommend you use something more meaningful."),Object(i.b)("h4",{id:"domain"},"domain"),Object(i.b)("p",null,"This is the domain for your Onepanel resources. Some resources like Workspaces create subdomains of this domain so they can be accessed by a browser. This can be a top level domain like ",Object(i.b)("inlineCode",{parentName:"p"},"example.com")," or a subdomain ",Object(i.b)("inlineCode",{parentName:"p"},"sub.example.com"),"."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Domains, not ip addresses, are required with Istio."))),Object(i.b)("h4",{id:"fqdn"},"fqdn"),Object(i.b)("p",null,"This is where Onepanel UI and API will be deployed. This should be a subdomain of the ",Object(i.b)("inlineCode",{parentName:"p"},"domain")," field mentioned above. For example: ",Object(i.b)("inlineCode",{parentName:"p"},"app.example.com")," or ",Object(i.b)("inlineCode",{parentName:"p"},"app.sub.example.com"),"."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Domains, not ip addresses, are required with Istio."))),Object(i.b)("h4",{id:"insecure"},"insecure"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"insecure")," field is set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," by default and will be set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if you add the ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-https")," when running ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init"),"."),Object(i.b)("h4",{id:"nodepool"},"nodePool"),Object(i.b)("p",null,"Depending on your provider, these are either called node pools or node groups. They are labels on Kubernetes nodes that Onepanel uses for auto scaling nodes on demand."),Object(i.b)("p",null,"A common ",Object(i.b)("inlineCode",{parentName:"p"},"label")," to identify these is ",Object(i.b)("inlineCode",{parentName:"p"},"beta.kubernetes.io/instance-type")," which most cloud providers automatically set. The value of this label is usually set to the instance type of the cloud provider."),Object(i.b)("p",null,"You can see all labels on your nodes by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get nodes --show-labels\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For minikube, you can use this configuration."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"nodePool:\n  label: minikube.k8s.io/name\n  options:\n  - name: 'Minikube'\n    value: minikube\n")))),Object(i.b)("p",null,"Note that this lists many different labels, so you can pick and choose any label key/value that is unique to that node."),Object(i.b)("p",null,"For example after running the ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," command above, you may get the following list of labels:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"{3}","{3}":!0}),"agentpool=nodepool1,\nbeta.kubernetes.io/arch=amd64,\nbeta.kubernetes.io/instance-type=Standard_D2s_v3,\nbeta.kubernetes.io/os=linux,\nfailure-domain.beta.kubernetes.io/region=eastus,\n")),Object(i.b)("p",null,"You can then use the label key/value pairs as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{2,4-5}","{2,4-5}":!0}),"nodePool:\n  label: beta.kubernetes.io/instance-type  # node label key\n  options:\n    - name: 'CPU: 2, RAM: 8GB'      # friendly name for instance\n      value: 'Standard_D2s_v3'      # node label value\n    - name: 'CPU: 4, RAM: 16GB'\n      value: Standard_D4s_v3\n    - name: 'GPU: 1xK80, CPU: 6, RAM: 56GB'\n      value: Standard_NC6\n")),Object(i.b)("h3",{id:"artifactrepository"},"artifactRepository"),Object(i.b)("p",null,"This section allows you to setup the default object storage for your Workflow and Workspace artifacts, which includes Workflow log storage. Onepanel currently supports any S3 compatible artifact repository such as AWS, GCS and Minio. Support for additional object storages is coming soon."),Object(i.b)("p",null,"Here's an example AWS S3 configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"artifactRepository:\n  s3:\n    accessKey: AKIAJSIE27KKMHXI3BJQ\n    bucket: pipelines.example.com\n    endpoint: s3.amazonaws.com\n    region: us-west-2\n    secretKey: 5bEYu26084qjSFyclM/f2pz4gviSfoOg+mFwBH39\n")),Object(i.b)("p",null,"Here's an example Google Cloud GCS configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'artifactRepository:\n gcs:\n    bucket: mygreatbucket\n    endpoint: storage.googleapis.com\n    insecure: false\n    keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}\n    serviceAccountKey: |\n      {\n        "type": "service_account",\n        "project_id": "my-project-id",\n        "private_key_id": "private_key_id",\n        "private_key": "private_key",\n        "client_email": "client_email",\n        "client_id": "client_id",\n        "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n        "token_uri": "https://oauth2.googleapis.com/token",\n        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n        "client_x509_cert_url": "cert_url"\n      }\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can get the serviceAccount JSON via gcloud."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"gcloud iam service-accounts keys create key.json \\\n   --iam-account ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com\n")))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Onepanel Workflows will automatically upload or download artifacts from ",Object(i.b)("inlineCode",{parentName:"p"},"artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}"),". See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/workflows/templates#artifacts"}),"Workflow artifacts")," for more information."))),Object(i.b)("h3",{id:"certmanager"},"certManager"),Object(i.b)("p",null,"If you have run ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init")," with ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-https"),", ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-cert-manager")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--dns-provider")," flags set, you need to configure your respective DNS provider here so that Onepanel can create and renew your TLS certificates for you."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/tls"}),"TLS certificates")," for more information about configuring this section."),Object(i.b)("h3",{id:"database"},"database"),Object(i.b)("p",null,"This is the database settings section. "),Object(i.b)("p",null,"For a test cluster, you can set the database ",Object(i.b)("inlineCode",{parentName:"p"},"host")," to ",Object(i.b)("inlineCode",{parentName:"p"},"postgres")," and use any ",Object(i.b)("inlineCode",{parentName:"p"},"username")," or ",Object(i.b)("inlineCode",{parentName:"p"},"password"),". This database will be automatically created in the cluster with the information you entered."),Object(i.b)("p",null,"Note that you cannot change the username/password for the test database once it's created."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"database:\n  databaseName: onepanel\n  driverName: postgres\n  host: postgres\n  password: mypassword\n  port: 5432\n  # Database username\n  # If using an external production database, use the username for that database.\n  # For in-cluster test database, use any username you like.\n  username: onepanel\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For a production environment, use a managed database service and set the configuration accordingly."))),Object(i.b)("h3",{id:"metallb"},"metalLB"),Object(i.b)("p",null,"This is to configure a load balancer for local or bare-metal deployments."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Component: Application and kubernetes load balancing on non-cloud deployments.\n# Description: MetalLB, LoadBalancer\n# CLI flag: --enable-metallb\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nmetalLb:\n  addresses:\n  - 10.1.31.1/24\n")),Object(i.b)("p",null,"Getting the address range"),Object(i.b)(r.a,{defaultValue:"minikube",values:[{label:"Minikube",value:"minikube"},{label:"Microk8s",value:"microk8s"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"minikube",mdxType:"TabItem"},Object(i.b)("p",null,"First, find minikube's ip."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"minikube ip\n")),Object(i.b)("p",null,"For the first part of the range, use ",Object(i.b)("inlineCode",{parentName:"p"},"minikube ip + 1")),Object(i.b)("p",null,"So if ",Object(i.b)("inlineCode",{parentName:"p"},"minikube ip")," gives us ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.64.64")),Object(i.b)("p",null,"We use ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.64.65")),Object(i.b)("p",null,"For the second part of the range, change the last part to ",Object(i.b)("inlineCode",{parentName:"p"},"255")),Object(i.b)("p",null,"So we can use a range of ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.64.65")," to ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.64.255")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"metalLb:\n  addresses:\n  - 192.168.64.65-192.168.64.255\n"))),Object(i.b)(c.a,{value:"microk8s",mdxType:"TabItem"},Object(i.b)("p",null,"Get inside the VM of multipass."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"multipass shell microk8s-vm\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"ifconfig -a\n")),Object(i.b)("p",null,"You'll get something like this"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cni0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1450\n        inet 10.1.31.1  netmask 255.255.255.0  broadcast 0.0.0.0\n        inet6 fe80::58ce:8dff:fe5e:2be5  prefixlen 64  scopeid 0x20<link>\n        ether 5a:ce:8d:5e:2b:e5  txqueuelen 1000  (Ethernet)\n        RX packets 37251  bytes 4363323 (4.3 MB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 38095  bytes 9152263 (9.1 MB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n[...Other output...]\n")),Object(i.b)("p",null,"We want CNI because it's the Container Network Interface."),Object(i.b)("p",null,"In our case, we have ",Object(i.b)("inlineCode",{parentName:"p"},"10.1.31.1")),Object(i.b)("p",null,"So we can use ",Object(i.b)("inlineCode",{parentName:"p"},"10.1.31.0/24")," for a range of ",Object(i.b)("inlineCode",{parentName:"p"},"10.1.31.0")," to ",Object(i.b)("inlineCode",{parentName:"p"},"10.1.31.255")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"metalLb:\n  addresses:\n  - 10.1.31.1/24\n# or\n# - 10.1.31.0 - 10.1.31.255\n")))),Object(i.b)("h3",{id:"workflowengine"},"workflowEngine"),Object(i.b)("h4",{id:"containerruntimeexecutor"},"containerRuntimeExecutor"),Object(i.b)("p",null,"The executor workflow engine uses to perform certain actions like monitoring pod logs, collecting artifacts, managing container lifecycles, etc."),Object(i.b)("p",null,"The possible values are ",Object(i.b)("inlineCode",{parentName:"p"},"docker")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pns"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"docker")," is more reliable, however it mounts the ",Object(i.b)("inlineCode",{parentName:"li"},"docker.sock")," of the host makes it less secure."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pns")," is more secure, however in some versions of Kubernetes, it tends to fail on tasks that take less than 15 seconds.")),Object(i.b)("h3",{id:"services"},"services"),Object(i.b)("p",null,"Services are additional tools or applications you want to install alongside the main deployment.\nThese are set up to allow distributed workloads and are always available, unlike Workspaces."),Object(i.b)("p",null,"Each Service has its own configuration, consult the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/services/overview"}),"Services reference")," for more information."),Object(i.b)("p",null,"Here's an example of adding a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/VertaAI/modeldb"}),"ModelDB")," Service."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"services:\n  modelDb:\n    artifactRepository:\n      s3:\n        # An s3 bucket to store your modeldb artifacts\n        bucket: example-modeldb-test\n        region: us-west-2\n    database:\n      # The name of the database where modeldb records will be stored.\n      # This will be automatically created if it does not exist\n      databaseName: modeldb\n      # This must be a database that already exists. It is used to establish a connection\n      # so the system can create the databaseName.\n      defaultDatabaseName: postgres\n")))}m.isMDXComponent=!0},153:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return u}));var n=t(0),o=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var a=o.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=b(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},d=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(t),d=n,u=p["".concat(r,".").concat(d)]||p[d]||m[d]||i;return t?o.a.createElement(u,c(c({ref:a},l),{},{components:t})):o.a.createElement(u,c({ref:a},l))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=d;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},154:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var r=o.apply(null,n);r&&e.push(r)}else if("object"===i)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(a,[]))||(e.exports=n)}()},156:function(e,a,t){"use strict";var n=t(0);const o=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});a.a=o},158:function(e,a,t){"use strict";var n=t(0),o=t.n(n);a.a=function(e){return o.a.createElement("div",null,e.children)}},159:function(e,a,t){"use strict";var n=t(0),o=t.n(n),i=t(156);var r=function(){return Object(n.useContext)(i.a)},c=t(154),s=t.n(c),l=t(93),b=t.n(l);const p=37,m=39;a.a=function(e){const{block:a,children:t,defaultValue:i,values:c,groupId:l}=e,{tabGroupChoices:d,setTabGroupChoices:u}=r(),[O,h]=Object(n.useState)(i);if(null!=l){const e=d[l];null!=e&&e!==O&&h(e)}const f=e=>{h(e),null!=l&&u(l,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":a})},c.map(({value:e,label:a})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:s()("tabs__item",b.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,a,t)=>{switch(t.keyCode){case m:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case p:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(j,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},a))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter(e=>e.props.value===O)[0]))}}}]);