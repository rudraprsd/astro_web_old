---
title: "git commands"
description: "This post contains important git commands which are in daily use"
publishDate: "11 May 2024"
# updatedDate: 22 Jan 2024
tags: ["git"]
# draft: true
---

- To know git version
```bash
git --version
```

- To initial git repository (it is empty)
```bash
git init
```

- To add a file into staging area.
```bash
git add filename
```

- To add all file, directory into staging area.
```bash
git add .
```

- To unstage.
```bash
git restore --staged filename
```

- To commit file to local repository from staging area.
each commit has unique id for identification.
```bash
git commit -m "message"
```

- To go back to specific commit  dont forget to put . at last, otherwise it will give you a detached head.
```bash
git checkout commitid .
```

- Shows in which branch we are present, untracked files, not commited but present in staging area etc.
```bash
git status
```

- Shows all commit ids.
```bash
git log
```

- For configuration (global)
```bash
git config --global user.name "name"
git config --global user.email "email id "
```

- For configuration (local)
```bash
git config user.name "name"
git config user.email "email id "
```

- Shows all the branch and present branch
```bash
git branch
```

- To create new branch
```bash
git branch branchname
```

- To change the branch
```bash
git checkout branchname
```

- To merge one branch to another. (If you want to merge 2 branch into 1, then first go to branch 1 , then merge it. It will empty the branch 2)
```bash
git merge branchname
```

- To delete a branch.
```bash
git branch -d branchname
```

- It creates a new branch as well as switched to that.
```bash
git checkout -b branchname
```

- To connect remote repo
```bash
git remote add origin ssh_or_https_id_of_the_repo
```

- To check if the remote repo connected or not.
```bash
git remote -v
```
- To delete or remove the remote repo. (considering origin is the name of remote repo)
```bash
git remote rm origin
```
- To clone a repo
```bash
git clone ssh_or_https_of_repo
```

- To change the default master branch to main. In git default is master whereas in github it is main. So, for less confusion we change the master to main.
```bash
git branch -M main
```

- To pull the code for sync with the repo.
    It only works if it connected to a remote repo by link
```bash
git pull origin branchname
```

- To push the changes. do not forget to add to staging area and commit before push to remote repo.
```bash
git push origin master
```

- To know the commit id is present in which branch
```bash
git branch --contains commitid
```

- To rename a branch
```bash
git branch -m oldname newname
```

- To delete a branch
```bash
git branch --delete branchname
```

- To see the remote branches
```bash
git branch -r
```

- To see all the branches including remote and local
```bash
git branch -a
```

**push means always to remote**

- To push the branch
```bash
git push -u origin branchname
```

- To push the current branch (-u is written for nexttime if you run git push then it pushes to this branch)
```bash
git push -u origin HEAD
```

- If local branch already exists in remote repo
```bash
git push
```

- To delete a branch in remote repo
```bash
git push origin --delete branchname
```

- To delete a branch in local repo. ( if it already been merged.)
```bash
git branch -d branchname
```

- To force delete a branch in local repo whether it has been merged or not. (-D is shortcut for --delete--force)
```bash
git branch -D branchname
```

- To push a local branch to different remote branch.
```bash
git push origin localbranch:remotebranch
```

- To see only file names in a commit.
```bash
git show --name-only commit-hash
```

**NOTE**:
- Only the files you add to staging area only those will be commited. Hence, you can commit different files in different branches.

- Sometimes you will see (END) generally in git log, and no command will work, that time press q or z or Ctrl+z. to terminate the process. It is bcz that is opened in scrollable terminal or limit window, i.e. in small window. to avoid this you can maximize the window. very Important.

- "origin" is actually the remote name. It is to identify among remote and local repo.

- To delete a commit from log ( but without changing any actual file )
```bash
git reset --soft HEAD~2
```
    Here, 2 for last 2 commit. HEAD for current branch. It only deletes the commit in log files.
