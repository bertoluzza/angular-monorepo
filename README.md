# Ngapp

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ed2b818-8bea-4120-acaf-a0743609c70c/deploy-status)](https://app.netlify.com/sites/angular-monorepo/deploys)

- [Demo su netlify](https://angular-monorepo.netlify.app/)

## Setup iniziale (Windows)

1. Installare git: https://git-scm.com/downloads/win
2. Installare `node` ed `npm` tramite `nvm`
- Alla pagina https://github.com/coreybutler/nvm-windows/releases scaricare ed installare `nvm-setup.exe`
- Aprire un terminale e eseguire i 2 comandi:

```
nvm install 20.13.1
nvm use 20
```

- Riavviare il computer ed assicurarsi di aver installato le versioni di Node `20.13.1` e npm `10.5.2`

3. Clonare il repository in locale nella cartella `C:\dev` (o in un'altra cartella a piacere)
```
git clone https://github.com/bertoluzza/angular-monorepo.git
```

4. Installare Visual Studio Code o un altro IDE a piacere
5. Per Visual Studio code, aprire il progetto ed installare le estensioni consigliate:
   - NX console
   - ESLint
   - Prettier - Code formatter
   - Tailwind CSS IntelliSense
6. Installare globalmente:
   - `nx`: `npm install -g nx@latest`
   - `@angular/cli`: `npm install -g @angular/cli`
7. Imposta la execution policy di PowerShell per eseguire gli script:
   - Aprire PowerShell come amministratore
   - Eseguire il comando `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
   - Conferma (_[A]_, _Yes to All_) e chiudi PowerShell
7. In un terminale nella folder `c:\dev\angular-monorepo`, eseguire il comando `npm install` per installare le dipendenze del progetto
8. Eseguire il comando `npm run start` per avviare l'applicazione Angular
9. Installare Angular DevTools per il proprio browser: https://angular.dev/tools/devtools

## Troubleshooting

- Angular CLI `npm install -g @angular/cli`
  - `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
  - vedi [angular.io](https://v17.angular.io/guide/setup-local#setting-up-the-local-environment-and-workspace)
- node-gyp:
  - Windows + OS X consultare: https://github.com/nodejs/node-gyp
  - Ubuntu: Ubuntu users please run: `sudo apt-get install g++ build-essential`
- Usare chrome
  - In caso di anomalie provare la modalità incognito o disabilitare le estensioni del browser (ad-blockers, ecc.)
- _Filename too long_: `git config --system core.longpaths true` ([How-to-fix-Git-Clone-Filename-too-long-Error-in-Windows](https://katalon-inc.my.site.com/katalonhelpcenter/s/article/How-to-fix-Git-Clone-Filename-too-long-Error-in-Windows))
- In caso di problemi con `npm install`:
```
npm cache clean --force
Remove-Item -Path node-modules -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path .angular -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path .nx -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path tmp -Force -Recurse -ErrorAction SilentlyContinue
npm install
```

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve ngapp
```

To create a production bundle:

```sh
npx nx build ngapp
```

To see all available targets to run for a project, run:

```sh
npx nx show project ngapp
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
