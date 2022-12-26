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

## Authors

*   [WebReadyProjects](https://github.com/wr-projects/) <support@webreadyprojects.atlassian.net>

Follow [@WebReadyProjects](https://twitter.com/WebReadyCompany) on Twitter for updates.