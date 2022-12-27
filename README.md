[![Maintainer](https://img.shields.io/badge/Maintainer-WRProjects-7F187F)](https://github.com/wr-projects/)
![./LICENSE](https://img.shields.io/github/license/wr-projects/monorepojs-scaffolding)
[![REUSE status](https://api.reuse.software/badge/github.com/wr-projects/github-template)](https://api.reuse.software/info/github.com/wr-projects/monorepojs-scaffolding)
[![OSSLifecycle](https://img.shields.io/osslifecycle/wr-projects/github-template)](https://github.com/wr-projects/monorepojs-scaffolding/blob/main/OSSMETADATA)
[![Fosstars security rating](https://raw.githubusercontent.com/wr-projects/monorepojs-scaffolding/.github/assets/fosstars-report/fosstars-security-rating.svg)](https://github.com/wr-projects/monorepojs-scaffolding/blob/fosstars-report/fosstars_security_rating.md)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# monorepojs-scaffolding

Scaffolding tools for creating and mainting projects based on WebReady Projects Open Source standards and best practices.

The project has 3 parts - 

1.  [Cookiecutter template to generate WRProjects OSS Policy files e.g. LICENSE, CONTRIBUTING, README, etc.]()
2.  [Script to add License headers to all source files in a project]()
3.  [Lint a repository for common missing files (repolinter)]()

---

## 1. Cookiecutter template to generate OSS policy files

A [cookiecutter](https://github.com/cookiecutter/cookiecutter) template to generate necessary files for a WebReady Projects.

### Requirements

Install `cookiecutter` command line: `pip install cookiecutter`

### Usage

Run cookiecutter against this repository.

`cookiecutter htps://github.com/wr-projects/monorepojs-scaffolding` or `cookiecutter gh:wr-projects/monorepojs-scaffolding`

or

You can also run it locally after cloning this repository:
`cookiecutter /path/to/directory`

See [documentation]() for more usage instructions.

### Inputs

See [cookiecutter.json](/cookiecutter.json) for all the variables required as input. Here is the list of places they are used
 - `organization`:
 - `discord_url`:
 - `organiation_email`:
 - `support_email`:
 - `project_owner`:
 - `owner_email`:
 - `project_slug`:
 - `github_repo_url`: 
 - `short_description`:
 - `project_homepage`:
 - `documentation_homepage`:
 - `package_slug`:
 - `package_description`:
 - `package_license_type`:
 - `release_year`:

---

## 2. License Headers

If you need to add headers to a lot of files, we recommend using the [google/addlicense](https://github.com/wr-projects/addlicense) tool.

---

## 3. Linting (repolinter)

Lint all the necessary files in the project. - [Project Homepage](https://github.com/todogroup/repolinter)

- To run against a directory, use `npx repolinter /my/code/dir`
- To run against a git repository, use the --git option: `npx repolinter --git https://my.git.code/awesome`
- Note, if you are running a version of npm < 5.2.0, run `npm install npx` first.

---

## Contributors
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://www.facebook.com/profile.php?id=100009457709527"><img src="https://avatars.githubusercontent.com/u/16638358?v=4?s=100" width="100px;" alt="Gregoire Favreau"/><br /><sub><b>Gregoire Favreau</b></sub></a><br /><a href="#projectManagement-GregoireF" title="Project Management">📆</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Authors

[<img src="https://avatars.githubusercontent.com/u/16638358?v=4?size=115" width=115><br><sub>@GregoireF</sub>](https://github.com/GregoireF)

Follow [@WebReadyProjects](https://twitter.com/WebReadyCompany) on Twitter for updates.
