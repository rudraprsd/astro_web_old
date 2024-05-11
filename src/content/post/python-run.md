---
title: "Running a python code in latest linux systems"
description: "Running Python code with modules is a bit different nowadays on the latest Linux systems due to package conflicts."
publishDate: "11 May 2024"
# updatedDate: 22 Jan 2024
tags: ["python", "linux"]
# draft: true
---

## Execute Python Code in Latest Linux Systems (including Ubuntu 24.04)

From now on, we'll run Python programs in virtual environments.

**Why ?**

In Linux, Python packages from external sources might clash with existing system packages. To avoid conflicts, consider using virtual environments (venvs) – isolated spaces that keep packages separate. Each project can have its own venv, ensuring it has just the necessary packages. This approach is beneficial for both Linux and other operating systems like MacOS and Windows.

**Steps**

- Go to your home directory. 
```bash
cd ~
```

- create a new directory named .venv and go there 
```bash
mkdir .venv
cd .venv
```

- create a venv
```bash
python3 -m venv venv_name
```
It will create a directory with the name of "venv". You can keep any name of your choice. It is better to keep name related to your project. 

- To activate the venv

    Everytime you run a python program, you need to activate the specific venv. For that stay in your project directory. 
```bash
source ~/.venv/venv_name/bin/activate
```
Now, you can see a venv_name either right side or left side of your terminal. It is the indication of successfull activation of venv.

- To deactivate the venv, simply (in any directory)
```bash
deactivate
```
