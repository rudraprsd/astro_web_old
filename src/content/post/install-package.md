---
title: "Install package in Ubuntu/Debian systems"
description: "Installation methods"
publishDate: "11 May 2024"
# updatedDate: 22 Jan 2024
tags: ["linux"]
# draft: true
---

### For deb package:
- Install a package
```bash
sudo dpkg -i package_name
```

- Remove a package:
```bash
sudo dpkg -r package_name
```

- reconfigure and existing package:
```bash
sudo dpkg-reconfigure package_name
```
