import React, { useEffect, useState } from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

import Faq from "react-faq-component";
import styles from './FrequentQuestions.module.css';

const config = {
    animate: true,
    arrowIcon: "▲",
    tabFocus: true,
};

const FAQIndex = {
    Creating: {
        title: "",
        rows: [
            {
                title: "What are Smart Tokens and how do they work?",
                content:
                    <p>
                        Smart Tokens are used to help you to write and edit docs that are interwoven with your codebase. 
                        By adding referenced code tokens (such as variables, functions, or class names) in your documentation, 
                        these live code references are tracked by Swimm to keep your documentation up to date. 
                        To add Smart Tokens in Swimm, type a Backtick <code>`</code> anywhere in the editor. 
                        Read more about Smart Tokens <a href="/docs/Features/editor-commands">here.</a> 
                    </p>
            },
            {
                title: "Can create a Playlist that steps through multiple repositories?",
                content:
                    <p>
                        You can create a Playlist with documents that exist in one or more repositories. 
                        Simply navigate to another repo and select the docs you'd like to add. 
                        Note that Playlists can be embedded in other Playlists as well. 
                        Learn more about Swimm Playlists <a href="/docs/Features/Swimm-Playlists">here.</a>
                    </p>
            },
            {
                title: "How is data that is created with Swimm synced between team members?",
                content:
                    <p>
                        Data that is created with Swimm is synced exactly the same way you sync your code - via your code repository and Git. 
                        <br/> <br/> 
                        Remember that Swimm units are stored as Markdown files on your repo under the <code>./swm</code> folder. 
                        When you create or edit content, you commit it to your repository which can be reviewed, approved, 
                        and merged to a branch. It is shared when your teammates pull the latest version of the branch.
                        <br/> <br/> 
                        Swimm also has Cloud docs which are similar to common documentation tools. 
                        Cloud Docs are not coupled to your repository and can be shared via a link to any Swimm user.
                    </p>
            },
            {
                title: "We already have different kinds of documentation, recorded lectures etc. Do we need to import them to Swimm?",
                content: 
                <p>
                    Many of our clients have documentation on several platforms when they install Swimm. <br/>
                    <strong>Your internal code-related documentation will get "superpowers"</strong> with Swimm compared to other documentation tools.
                    If you are already using a documentation tool, we highly recommended using Swimm's Batch Import feature to bring over all of your docs and other relevant files. 
                    <br/><br/>
                    If you decide to keep some of the documentation on other tools such as Notion or Confluence, 
                    the shortest and easiest way to incorporate them into Swimm is to link to them from within your docs or Playlists on Swimm. This is a useful way to curate the important parts of your documentation into subjects, and you can also link from other platforms to Swimm Documents or Playlists.
                    <br/><br/>
                    If there's a particular integration you would like to request, please let us know and contact us at info@swimm.io .
                </p>
            },
            {
                title: "What are some ways to help get my team get started write documentation?",
                content:
                    <p>
                        When creating code-coupled documentation, remember that you don't have to start from scratch. Swimm helps to the end with a bunch of options:
                        <ul>
                        <li>You can use <strong>Swimm's Guide Doc Creation</strong> wizard to walk you through step-by-step to create a doc on any topic you'd like. We ask a series of questions and help you structure the document and understand which parts of the code you need to choose in order to explain it.
                        </li>

                        <li>Start creating documentation from a pull request. If there's a pull request that you just finished or one that is a good example of how to solve something specific we bring in all the important "Difs" as code snippets, and you can start documenting from there.
                        </li>

                        <li>Create documentation using Swimm Templates
                        </li>

                        <li>Import existing documentation, including Markdown files. You can also perform a batch import from an entire repository or a local folder that contains Markdown files.
                        </li>
                        </ul>
                    </p>
            },
            {
                title: "How much of developer time in sprints should be reserved for Swimm?",
                content:
                    <p>
                        You don't have to reserve developers' time for Swimm, and you can create documentation when needed. 
                        However, we have seen teams successfully reserve 1 hour in the beginning of every sprint to document the main outcomes of the previous sprint.
                        <br/><br/>
                        That said, to see immediate value from Swimm, it really takes a very short time - even just minutes.
                        We recommend the following:
                        <br/><br/>
                        <h4>Step 1:</h4>
                        Find areas in the code that are common for new developers to start with. Some examples:
                        <ul>
                        <li>How to set up a new environment</li>
                        <li>How to create a common component</li>
                        <li>An overview of a system or a process</li>
                        </ul>
                        Swimm has several templates to start with, along with our Guided Doc Creation process on how to write effective documentation.
                        <br/><br/>
                        <h4>Step 2:</h4>
                        Make sure all team members install Swimm's IDE plugin.  When your documentation appears naturally inside the IDE, it encourages your team to read it in context. What we know is that the key for investing in documentation is making sure people will find it easily when they need it the most.
                    </p>
            },

            {
                title: "How much work is it to create documentation?",
                content:
                    <p>
                        Swimm helps you create code-coupled documentation very quickly. 
                        <br/>
                        To get started consider the following method:
                        <br/><br/>
                        <ul>
                        <li>Create a new document</li>
                        <li>Add code snippets related to the topic</li>
                        <li>In a sentence or two, describe what each snippet does</li>
                        <li>Fill in the space between snippets by describing how they interconnect</li>
                        </ul>
                        <br/>
                        With some practice, it can take just several minutes to create documentation to help your larger 
                        team understand aspects of the codebase that will benefit from the documentation. 
                        You can also use <a href="https://swimm.io/blog/how-to-use-swimm-templates/">Swimm templates</a> 
                        from Swimm's template collection to help you get started writing a doc.
                    </p>
            },

            {
                title: "How do I reference a specific line using Swimm?",
                content:
                    <p>
                       Swimm's Snippet Studio our web application allows you to add live code snippets directly to your docs.
                        <br/><br/>
                        <ul>
                        <li>Start with Swimm's Snippet Studio. <br/>Once you select a code snippet command, 
                        Swimm’s Snippet Studio will appear and help you locate a file and then select a certain section from it. Once you have selected the code section, click “Add & Exit” (or press “Enter”).</li>
                        <li>Find the file you are looking for</li>
                        <li>Highlight a line or more of code</li>
                        <li>Adjust the gray handles <strong><i>(the context)</i></strong> for additional or fewer lines</li>
                        </ul>
                    </p>
            },
        ],
    },
    Workspaces: {
        title: "",
        rows: [
            {
                title: "Does Swimm support using multiple repositories?",
                content:
                    <p>
                        Yes, with Swimm, you can set up a workspace with multiple repositories.<br/>
                        You can also create Docs and Playlists with code snippets across multiple repositories.
                    </p>
            },
            {
                title: "How Do I Create A Playlist That Steps Through Multiple Repositories?",
                content:
                    <p>
                        From your main workspace page, select "Workspace Playlist". This will
                        allow you to bring in docs and other playlists from any repositories in
                        the workspace.
                    </p>
            },
            {
                title: "How Do I Invite Someone To A Workspace?",
                content:
                    <p>
                        You can invite users, see pending invitations and manage your team by
                        clicking the "invite" link at the top-right of the main workspace page.
                    </p>
            },
    
            {
                title: "Is there a user limit for public repositories?",
                content:
                    <p>
                        Swimm has <strong>no limit</strong> to adding <strong>public</strong> repositories to your workspace.
                        <br/>
                        In the <strong>Free</strong> plan, you can only add one <strong>private repository</strong> inside a workspace. <br/>
                        Paid plans (Standard and Pro) let you add <strong>unlimited private repositories.</strong><br/>
                    </p>
            },
        ],
    },
    SwimmValue: {
        title: "",
        rows: [
            {
                title: "How much time do I need to invest in creating content on Swimm before I see value?",
                content:
                <p>
                    Very little. <br/>
                    From our experience, with a few hours of work, you can help your devs save days to weeks in ramp-up time. 
                    You can also easily incorporate content creation into your workflow, by creating documentation from pull requests and commits that encapsulate parts of the code you need to document. 
                </p>
            },
            {
                title: "What's the difference between Swimm documentation and regular documentation?",
                content:
                <p>
                    Swimm allows you to create <a href="/docs/creating-content/fluid-editor">Code coupled documentation</a> by adding live snippets from your code. 
                    Regular documentation systems are not built for software documentation because code changes rapidly and regular documentation solutions need to be manually maintained.
                    <br/><strong>With Swimm, it becomes easily manageable thanks to Swimm's Auto-sync algorithm that helps users keep these snippets and your documentation always up to date. </strong>
                    <br/><br/>
                    Coupling documentation with the code also means it's more <strong>focused</strong>, <strong>easy to find</strong> while you're working - having your documentation available directly in your IDE where you need it.
                    Code-coupled documentation also gives you new powerful ways to document your architecture, your classes, and your styling guides (and so on) in ways that weren't possible before. 
                    <br/><strong>With Swimm's platform, you get far better internal documentation with much less time invested</strong>.

                </p>
            },
            {
                title: "Comments on the code are also coupled with it. Is Swimm like comments?",
                content:
                <p>
                    Comments help understand the specific lines of code they are associated with. Understanding code, and especially complex code scenarios, usually require following a flow of code from different files, and sometimes different repos. Comments do not help with that. 
                    <br/><br/>Also, if you forget to update a comment, you don't get a notification or warning.
Swimm doesn't replace comments in code - <a href="https://swimm.io/blog/walkthrough-documentation-where-swimms-main-value-lies/">it augments them</a>. It puts the narrative right where you need to find it, <a href="https://docs.swimm.io/docs/publishing-content/ide-plugins">in your IDE</a>. You'll see that it's there for your team if they need it when they need it.
                </p>
            },
            {
                title: "What are the differences between code comments and Swimm docs?",
                content:
                <p>
                    Swimm is a crossbreed between code comments and high-level documentation. With Swimm, you add code snippets to your docs, so they are available right inside the doc whenever you select a code snippet. When you use one of <a href="https://swimm.io/blog/ide-integrated-documentation-using-swimm/">Swimm’s IDE plugins</a>, links to available documentation appear right within the code.
                    <br/><br/>
                    Because documentation is code-coupled, you find your documents in time, they describe flow and patterns using the actual code, documentation coverage is automatically detected and flagged, and there’s no more risk of code comments becoming outdated or accidentally deleted.
                </p>
            },
            {
                title: "What's the ROI? We're not sure investing so much time is paid off? Is Swimm worth the money?",
                content:
                <p>
                    Clients using Swimm are reporting the following:
                    <ul>
                    <li>Swimm is helping them spend up to 55% less time onboarding new employees</li>
                    <li>Swimm streamlines code documentation, linking the code and making it very convenient.</li>
                    <li>Swimm has been critical for ensuring internal docs around the ecosystem stay up to date</li>
                    <li>Swimm helps developers become more open to the culture of documentation</li>
                    </ul>
                    and more...
                    <br/><br/>
                    At the end of the day, Swimm is saving user teams hundreds of hours looking for knowledge and docs. Swimm understands well the friction and frustration around searching for something that you don't know if it even exists, coupled with the ongoing fear of knowledge loss and legacy code. These all are, unfortunately, very familiar problems for most organizations.
                    <br/><br/>
                    Swimm provides an effective and efficient way to reduce (and sometimes completely eliminate) these challenges.
                    For more details here are some articles that address the impact of swimm over R&D teams:
                    <ul>
                    <li><a href="https://swimm.io/case-studies">Case studies</a> Swimm case studies</li>
                    <li><a href="https://swimm.io/blog/meeting-challenges-software-development-teams/">Swimm's whitepaper </a></li>
                    <li><a href="https://swimm.io/blog/how-swimm-uses-swimm/">How Swimm uses Swimm</a></li>
                    </ul>
                </p>
            },
            {
                title: "Besides onboarding, what are the other use cases for Swimm?",
                content:
                <p>
                    Use cases for Swimm include:
                    <ul>
                    <li><strong>Complex Code:</strong> Create documentation for complex code and non-standard processes that is confusing and requires more information.</li>
                    <li><strong>Knowledge Sharing:</strong> Create documentation to eliminate legacy code and promote inclusive teams & knowledge sharing.</li>
                    <li><strong>Refactoring:</strong> Update parts of the documentation that require updating as a result of the refactoring, and let your team know about the changes.</li>
                    <li><strong>Research → Development:</strong> Document the infrastructure and research process used, and share the results with the development team. Having a research team share its results with the development team. Explain how to use the research outcomes during development.</li>
                    <li><strong>Internal API:</strong> Demonstrate flows of using the API internally.</li>
                    </ul>
                </p>
            },
            {
                title: "Why shouldn't I use a 'pseudo code' snippet but a code-coupled snippet?",
                content:
                <p>
                    <code>Pseudo code</code> snippets (codeblocks) are fundamentally different from Swimm snippets by their function and purpose.
                    <ul>
                    <li>Codeblocks are used for demonstrating an example or usage of the code. <br/>The example itself doesn't exist in the codebase and its purpose is to explain how things work. Codeblocks are not synced or automatically maintained by Swimm.</li>
                    <li>Swimm Snippets are actual line-by-line code taken directly from the codebase. Snippets are synced and automatically maintained and updated by Swimm.</li>
                    </ul>
                    <strong>💡 Pro Tip:</strong>There is a way to have example code that is also synced or maintained. Here's how:
                    Code examples are often very similar to tests. Traditionally tests are a way to implement a part of the code. You can add a test about a component, a function, or a class.                    By adding a test that represents your example and then adding it as a Swimm snippet, you will benefit from having synced code examples in your docs.

                </p>
            },
            {
                title: "How can Swimm be used to help with setting up a new hire's environment?",
                content: 
                <p>
                    Our clients use Swimm in two ways to help new hires with their initial setup:
                    <ul>
                    <li>Create an <a href="/docs/creating-content/playlists">organized set of steps</a> the onboardees should take and validate themselves. These steps can also be linked to code snippets (e.g., MAKEFILEs or devops scripts).</li>
                    <li>Create hands-on Swimm docs that explain parts of the deployment / build / debugging process.</li>
                    </ul>

                </p>
            },
            {
                title: "How hard is it to master the basics of Swimm?",
                content:
                <p>
                    Learning how to use Swimm is very straight forward, and easy to pick up. 
                    <br/><br/>
                    Swimm functionality is primarily categorized as:
                    <ul>
                    <li>Reading and creating documentation </li>
                    <li>Creating Playlists </li>
                    <li>Organizing documentation </li>
                    </ul>
                    Swimm's Editor's capabilities can be categorized as:
                    <ul>
                    <li>General documentation editor capabilities - as you would find in Notion or Confluence - such as <strong>"/heading 1"</strong>, <strong>"/quote"</strong> or <strong>"/codeblock"</strong></li>
                    <li>Swimm special commands such as <strong>"/snippet"</strong> or <strong>"/doc"</strong></li>
                    <li>Swimm suggestions</li>
                    <li>Swimm syncing capabilities </li>
                    </ul>

                    Swimm "<a href="/docs/getting-started-guide">Quick Start Guide</a>" is a 5 minutes tutorial that goes through Swimm's capabilities.
                </p>
            }
        ]
    },
    Security: {
        title: "",
        rows: [
            {
                title: "Where and how is my data stored and saved?",
                content:
                    <p>
                    <strong><i>Safety and security are a top priority at Swimm.</i></strong><br/><br/>
                    <ol>
                    <li><strong>None of your actual code or content is stored on Swimm's server</strong>. Swimm only stores meta-data such as document titles, timestamps, usage statistics etc.</li>
                    <li>All data transferred to and from Swimm's server (Google Cloud Platform GCP) will be <strong>encrypted during transit</strong>. Any data or metadata stored on Swimm's servers will be encrypted at rest.</li>
                    <li>Only you, and those who normally have access to it in GitHub, can see your code. <strong>Swimm never makes a copy of your code</strong>, but for some features, Swimm processes parts of your code in order to make recommendations and suggestions for documentation that should be updated.</li>
                    <li><strong>The GitHub token is not stored at any time on Swimm's servers</strong>. The token is stored on the client-side browser (local storage) in a manner that is only accessible in the Swimm app. Every time an action is triggered, GitHub sends the unique app installation identifier to Swimm’s server. We use this information to generate a unique token (one-off token). This token is never stored on our servers and is used for the duration of the action only.</li>
                    </ol>
                    <br/>
                    <h4>SOC2</h4>
                    <strong>Swimm is SOC 2 compliant</strong>. Additional information about Swimm's security profile can be found <a href="https://docs.swimm.io/github/">here</a>.
                    </p>
            },
            {
                title: "Where are images stored in Swimm?",
                content:
                    <p>
                        By default, images are uploaded to our secure Cloud storage. It is possible to enable a configuration to allow you to store images in your repo so that they are loaded with relative paths. For more information, please reach out to Swimm's support team in our <a href="https://swimm.io/slack">Community Slack Channel</a> or email us at info@swimm.io
                    </p>
            },
            
    ]
    },
    Troubleshooting: {
        title: "",
        rows: [
            {
                title: "How do I contact support?",
                content:
                    <p>
                        Here are 3 of the best way to reach out to our Swimm Support team:<br/>
                        Reach out to us on our <a href="https://swimm.io/slack">Community Slack Channel</a>. 
                        <br/>
                        <br/>
                        <ol>
                        <li>You can also join the Community Slack Channel in the Help Center in the web app.</li>
                        <li>Submit Swimm's "Give Feedback" form - also in the Help Center.</li>
                        <li>Send us an <a href="info@swimm.io">email</a>.</li>
                        </ol>   
                    </p>
            },
            {
                title: "Why can't I see any of my repositories?",
                content:
                    <p>
                         If you do not see the repository that you wish to add, most likely your organization doesn't have the correct Swimm permissions.
                        <br/><br/>
                        After you click "Connect Repository," click on the "Manage Scope" button to grant organizational access to Swimm, 
                        You may also ask your Admin at Swimm for additional assistance, or reach out to us on our <a href="https://swimm.io/slack">Community Slack Channel</a>.
                    </p>
            },
            {
                title: "I've been playing with VSCode extension and I can't figure out how to jump to the code referenced by the snippet.",
                content:
                    <p>
                        Once you have Swimm extension installed in VS Code.
                        Make sure that:
                        <ul>
                        <li>You are logged in to your Swimm account (via the VS Code extension) </li>
                        <li>You already have a least one Swimm document with at least one Code Snippet included.</li>
                        </ul>
                        <strong>To jump from a code reference to its related doc</strong> - in your VS Code navigate to the code file that you have documented.
                        You will see Swimm's Icon visible alongside a gray comment above the referenced lines.
                        Clicking on either the icon or the comment - will open the documentation in place.
                        <br/>
                        <br/>
                        <strong>If you want the other way around</strong> - open the file code referenced in the document.
                        <ul>
                        <li>Have the document in front of you opened in the IDE (the <code>*.sw.md</code> file)</li>
                        <li>above the snippet, you will see the name and path of the file that the snippet has been taken from</li>
                        <li>Use VS Code native capabilities to quick jump to a file now that you have the path of the file in hand</li>
                        </ul>
                    </p>
            },
            {
                title: "How do I invite someone to a workspace?",
                content:
                    <p>
                         You can invite a teammate via the <strong>Invite </strong>link located at the top right corner in the Swimm App. 
                         In the email input field, enter your teammate's email address. Alternatively,
                        if you are looking to invite multiple teammates, separate their email addresses with a comma. 
                        When done, click the <strong>Send invite</strong> button.
                    </p>
            },
            {
                title: "How do I invite someone to a workspace?",
                content:
                    <p>
                         You can invite a teammate via the <strong>Invite </strong>link located at the top right corner in the Swimm App. 
                         In the email input field, enter your teammate's email address. Alternatively,
                        if you are looking to invite multiple teammates, separate their email addresses with a comma. 
                        When done, click the <strong>Send invite</strong> button.
                    </p>
            },  
            {
                title: "Is there a way to exclude a file or a folder from Auto-sync?",
                content: 
                    <p>
                       Currently, it is not possible to ignore select files or folders for Auto-sync. However, it is on our Swimm roadmap. 
                    </p>
            }

        ],
    },
    SignUpAndPermissions: {
        title: "",
        rows: [
            {
                title: "What is the Admin status at Swimm?",
                content:
                    <p>
                        A Swimm Admin is a workspace member who has full access to workspace settings, 
                        integrations and account management. A Swimm Admin doesn't have to be a GitHub organization owner, 
                        nor a Slack Admin to integrate with Swimm. 
                        <br/> <br/>
                        Please reach out to on our <a href="https://swimm.io/slack">Community Slack Channel</a> if you have any questions about the Admin status.
                    </p>
            },
            {
                title: "What permissions are needed to use Swimm?",
                content:
                    <p>
                        Swimm does not store your documents or parts of your code. However, 
                        GitHub authoring policy doesn't allow write permissions per directory, 
                        so Swimm needs organizational, read & write permissions to the designated 
                        documentation folder in your repository (a <i>"./swm"</i> folder we create in order to store the documents).
                        <br /><br />
                        More about the 3 types of permissions:
                        <ul>
                            <li>
                                <strong>Organizational permission:</strong> You'll need to specify which organization owns the repos you'll be working on. This will allow you to grant Swimm individual repo permissions within that organization.
                            </li>
                            <li>
                                <strong>Read permission:</strong> Swimm will need to be able to read your repository and access to the entire commit history in order to be able to understand and account for code changes. Note that your code remains in your repo, and Swimm simply stores metadata about snippets, paths, and tokens so that it can remember what it's supposed to keep track of.
                            </li>
                            <li>
                                <strong>Write permission:</strong> Swimm uses a special directory named .swm/ in your repo to store your documentation along with a unique identifier that correlates your documentation to your repository.
                            </li>
                        </ul>
                        Read more about permissions <a href="/docs/authorization/permissions/">here</a>. 
                    </p>
            },
            {
                title: "What Github Account Should I Use?",
                content:
                    <p>
                        Use the account associated with the organization you're working for. In almost all cases,
                        this is very likely to be your personal Github account, even if you received a workspace
                        invitation to your work email address.
                    </p>
            },  
        ],
    },
    Integration: {
        title: "",
        rows: [
            {
                title: "What's The Difference Between Swimm's GitHub App And Swimm's GitHub Action?",
                content:
                    <p>
                       <a href="https://github.com/apps/swimm-io">Swimm's GitHub app</a> is a native integration created by Swimm leveraging GitHub's Check mechanism. This means that you don't have to run any manual scripts as part of your CI pipeline (unlike GitHub Actions) since the GitHub App takes care of all of this for you. 
                        <br/><br/>
                        With Swimm's GitHub app, you can configure multiple configurations such as:
                        <ol>
                        <li>Allowing Swimm to automatically update and commit minor, out-of-sync code snippet inconsistencies in your docs.</li>
                        <li>Allowing Swimm to fail a check only when outdated/out-of-sync docs are caused by changes performed in the current PR by the developer, instead of changes that may have been performed in previous PRs by other developers.</li>
                        <li>Allowing Swimm to alert you via a PR comment recommending you existing Swimm documentation that you should review when code changes.</li>
                        <li>Receiving an email whenever a new doc was merged to the default branch. </li>
                        </ol>
                        <br/><br/>
                        If you're using GitHub, we strongly encourage you to <a href="https://github.com/apps/swimm-io">install our GitHub app</a>. This will provide the best possible experience for everyone involved from the originator of the PR all the way to the reviewer. For more information on Swimm's GitHub app, see <a href="/docs/continuous-integration/github-app"> here</a>.
 
                    </p>
            },
            {
                title: "How does viewing docs in VS Code work with the IDE extension? I have it installed in my VS Code, but it doesn't seem to do anything.",
                content:
                    <p>
                         Swimm has an <a href="/docs/ide-integrations/ide-plugins-vscode">integration with VS Code</a> enabling documentation 
                         icons over your code.
                        <br/><br/>
                        After installing Swimm's VS Code plugin, you will be asked to login to your Swimm account. 
                        If you don't have a Swimm account, you can register <a href="https://app.swimm.io/register">here</a>. 
                        <br/><br/>
                        After logging in, you will have a Swimm icon on your VS Code sidebar. 
                        Clicking it will show the Swimm panel with all the documentation already created.
                        <br/><br/>
                        When navigating to a code file that has Swimm documentation, a "wave icon" will appear in the code, 
                        right next to the lines that have been added to the Swimm doc. 
                        Make sure that you have added a code snippet to your Swimm Doc.
                        <br/><br/>
                        If you do have Swimm docs ("./swm/*.md) already and you don't see any documentation in the Swimm sidebar:
                        <br/>
                        <ul>
                        <li>Make sure you are working on the desired branch where the documentation exists</li>
                        <li>Try logging out and logging in. In VScode the credentials appear on the user icon on the bottom left</li>
                        <li>Make sure you have been added to the Swimm workspace where this doc lives</li>
                        </ul>
                    </p>
            },
            
            {
                title: "Do you have integrations with ticket systems, such as Jira or ClickUp?",
                content:
                    <p>
                         We currently do not support integrations with ticketing systems, however it is on our Swimm roadmap. Stay tuned. 
                    </p>
            },
            {
                title: "Is there a UI to create entries from the IDE, rather than going through the web app?",
                content:
                <p>
                    Swimm IDE plugins for VS Code and the Jetbrains Suite are available in the Microsoft / Jetbrains marketplace. The current versions of the plugins are for read only documentation.
                    <br/><br/>
                    Swimm is currently working on a release to create documentation from the IDE. The release is planned in the coming months. If you want to know more exact roadmap details, please reach out to us on our <a href="https://swimm.io/slack">Community Slack Channel</a>.
                </p>
            }
        ],
    },
    General: {
        title: "",
        rows: [
            {
                title: "What languages does Swimm support? What about VCSs?",
                content: 
                    <p>
                        Swimm is language agnostic and supports all languages. Our continuous integration tools work on all Git hosting platforms and Swimm's GitHub App.
                        <br/>
                        Swimm relies on Git, but currently does not support other version control systems (VCSs) other than Git (such as Mercurial, Perforce, etc).
                    </p>
            },
            {
                title: "Is there a way to embed Swimm docs within Notion?",
                content: 
                    <p>
                        Yes there is! <br/>
                        Notion enables exporting all of your spaces to markdown files. Then, you can use Import them quickly as swimm docs.
                        In order tor add a Swimm permalink to a Notion Doc. More integrations and embedding support is on our roadmap. 
                    </p>
            },
            {
                title: "Does Swimm replace current platforms like Notion and Confluence? If not, how does it integrate?",
                content: 
                    <p>
                        Unlike Notion and Confluence, Swimm is built with developers and their workflow as our main focus. 
                        Our editor is optimized for code documentation. We keep documentation up to date with every PR and we make docs easily accessible in the IDE or Github. This drives our clients to replace Notion or Confluence with Swimm as their main documentation hub.
                        <br/><br/>
                        Some of our clients still use Notion or Confluence in parallel. This mostly happens when non-R&D departments are heavy users of these platforms, or when there's a longer transition period to Swimm, instead of a one-time migration.
                        <br/><br/>
                        To work with Swimm and one of these platforms, you can use deep links, or a script to import Swimm's .md documents into Notion or Confluence. We are currently working on more tools that will enable better integration with Confluence and Notion as well. Stay tuned.
                    </p>
            },
            {
                title: "Does Swimm have keyboard shortcuts?",
                content: 
                    <p>
                        Swimm uses keyboard shortcuts when editing a doc. <br/>
                        When you are editing a doc, go to the Swimm Help Center and click <strong>Keyboard Shortcuts</strong>.
                        <br/>
                        You can also trigger Swimm's Global Search capability by running CTRL+K (Windows/Linux) or ⌘+K (Mac) from any page (except when editing a doc or Playlist).
                    </p>
            },
            {
                title: "",
                content: 
                    <p>
                        
                    </p>
            },
            {
                title: "",
                content: 
                    <p>
                        
                    </p>
            },
            
        ]
    }
};

export default function FrequentQuestions({Category, Index=FAQIndex}) {
    var data = Index[Category];
    return (
    <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            <br />
        </div>
    );
}