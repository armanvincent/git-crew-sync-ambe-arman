# Git Workflow Reflection

## 1. What did the rejected push error message tell you, and why did it happen?

The rejected push told me that the remote branch contained changes that my local branch did not have. Git rejected the push because my local branch was behind the remote branch. This happened because another clone pushed changes to GitHub before I tried to push my own changes.

## 2. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

In Task 3, I used `git fetch` followed by `git merge`. Git combined the remote changes and my local changes, and I had to resolve the conflict manually. The merge created a merge commit.

In Task 4, I used `git fetch` followed by `git rebase`. Rebase moved my local commit on top of the latest remote changes, creating a more linear history. After resolving the conflict, I continued the rebase with `git rebase --continue`.

## 3. What one habit would have avoided both rejected pushes in this lab?

One habit that would have avoided both rejected pushes is pulling or fetching the latest changes from the remote before starting new work and pushing. This keeps my local branch up to date with the shared remote branch.

## 4. Which approach - merge or rebase - would you default to on a shared team branch, and why?

I would default to merge on a shared team branch because it preserves the actual history of how different developers' work was combined. It is also safer for a branch that multiple people are working on because rebase rewrites commit history.