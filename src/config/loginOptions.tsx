import githubLogo from "/assets/logos/github.png";
import gitlabLogo from "/assets/logos/gitlab.png";
import azureLogo from "/assets/logos/azure.png";
import bitbucketLogo from "/assets/logos/bitbucket.png";
import ssoLogo from "/assets/icons/key.png";
import { loginOptionType } from "../types/loginTypes";

export const loginOptions:loginOptionType = [
  {
    text: "SAAS",
    options: [
      {
        text: "Sign in with GitHub",
        logo: githubLogo,
      },
      {
        text: "Sign in with BitBucket",
        logo: bitbucketLogo,
      },
      {
        text: "Sign in with Azure Devops",
        logo: azureLogo,
      },
      {
        text: "Sign in with GitLab",
        logo: gitlabLogo,
      },
    ],
  },
  {
    text: "Self Hosted",
    options: [
      {
        text: "Self Hosted GitLab",
        logo: gitlabLogo,
      },
      {
        text: "Sign in with SSO",
        logo: ssoLogo,
      },
    ],
  },
];
