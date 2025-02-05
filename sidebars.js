// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    DocsSidebar: [
        "introduction",
        {
            type: "category",
            label: "Getting Started",
            collapsed: false,
            items: [
                "getting-started/installation",
                "getting-started/configuration",
                "getting-started/playground",
                "getting-started/security",
            ],
        },
        {
            type: "category",
            label: "Guides",
            collapsed: false,
            items: [
                "guides/syntax",
                "guides/semantics",
                "guides/built-ins/built-ins",
                {
                    type: "category",
                    label: "Aladino",
                    link: { type: "doc", id: "guides/aladino/specification" },
                    items: [
                        "guides/aladino/syntax",
                        "guides/aladino/semantics",
                    ],
                },
                "guides/annotations",
                "guides/commands/commands",
                "guides/extends/extends",
                "guides/reports/reports"
            ],
        },
        {
            type: "category",
            label: "Use Cases",
            link: {
                type: "doc",
                id: "use-cases/use-cases",
            },
            items: [
                "use-cases/auto-merge/auto-merge",
                {
                    type: "category",
                    label: "Automated Labelling",
                    link: {
                        type: "doc",
                        id: "use-cases/automated-labelling/automated-labelling",
                    },
                    items: [
                        'use-cases/automated-labelling/label-based-on-author-groups/label-based-on-author-groups',
                        'use-cases/automated-labelling/label-based-on-file-paths/label-based-on-file-paths',
                        'use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern',
                        'use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations/label-critical-changes-with-semantic-code-annotations',
                        'use-cases/automated-labelling/label-potential-missing-changes/label-potential-missing-changes',
                        'use-cases/automated-labelling/label-when-git-conflicts/label-when-git-conflicts',
                        'use-cases/automated-labelling/label-with-size/label-with-size',
                        'use-cases/automated-labelling/remove-label-based-on-file-paths/remove-label-based-on-file-paths'
                    ],
                },
                "use-cases/attention-set/attention-set",
                "use-cases/blocking-merge/blocking-merge",
                "use-cases/check-issue-description/check-issue-description",
                "use-cases/comment-on-pull-requests/comment-on-pull-requests",
                "use-cases/enforce-branch-conventions/enforce-branch-conventions",
                "use-cases/enforce-conventional-commits/enforce-conventional-commits",
                "use-cases/manage-issues-projects/manage-issues-github-projects",
                {
                    type: "category",
                    label: "Reviewer Assignment",
                    link: {
                        type: "doc",
                        id: "use-cases/reviewer-assignment/reviewer-assignment",
                    },
                    items: [
                        'use-cases/reviewer-assignment/assign-review-to-3-developers/assign-review-to-3-developers',
                        'use-cases/reviewer-assignment/assign-review-to-a-team/assign-review-to-a-team',
                        'use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners/assign-senior-reviewers-to-new-joiners',
                        'use-cases/reviewer-assignment/assign-sequential-reviewers/assign-sequential-reviewers',
                    ],
                },
                "use-cases/ship-show-ask/ship-show-ask",
                {
                    type: "category",
                    label: "Timestamps",
                    link: {
                        type: "doc",
                        id: "use-cases/timestamps/timestamps",
                    },
                    items: [
                        "use-cases/timestamps/label-on-change-freeze/label-on-change-freeze",
                        "use-cases/timestamps/notify-when-long-live-pull-request/notify-when-long-live-pull-request",
                    ],
                },
            ],
        },
        {
            type: "doc",
            id: "troubleshooting",
            label: "Troubleshooting",
        },
        {
            type: "doc",
            id: "contribute",
            label: "Contribute",
        },
        {
            Tooling: ["tooling/vscode-reviewpad-yaml-schema"],
        }
    ],
};

module.exports = sidebars;
