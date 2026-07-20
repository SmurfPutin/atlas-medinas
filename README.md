# Medina Atlas 

A static mini-site (HTML / CSS / JS) presenting three Tunisian medinas, built
for the **DS DevOps** project: Git/GitHub collaboration, Docker
containerization and a CI/CD pipeline with GitHub Actions.

## &#x20;Members

* @SmurfPutin (repository owner)
* Teacher — collaborator invite pending

## &#x20;Project structure

```
.
├── index.html              # Home page
├── html/                   # Secondary pages (about)
├── css/                    # Stylesheets
├── js/                     # Scripts (souk filter, lantern mode)
├── Dockerfile              # nginx:alpine image serving the site
├── .dockerignore
├── docker-compose.yml      # web service + logs service (bonus)
└── .github/workflows/ci.yml  # CI/CD pipeline (test → build → scan)
```

## &#x20;Installation and run

### Locally, without Docker

Open `index.html` in a browser. No server required.

### With Docker

```bash
docker build -t medina-atlas .
docker run -d -p 8080:80 medina-atlas
# → http://localhost:8080
```

### With Docker Compose (recommended for the demo)

```bash
docker compose up -d
docker compose logs -f logs   # follow nginx access logs via the 2nd service
docker compose down
```

## &#x20;Branching strategy

|Branch|Role|
|-|-|
|`main`|Stable, protected: merges only via PR with green CI|
|`develop`|Integration: features are merged here first|
|`feature-\\\*`|One branch per feature (e.g. `feature-souk-filter`)|
|`feature-docker-v1`|Dedicated containerization branch (assignment requirement)|

Workflow: `feature-\\\*` → PR to `develop` → PR `develop` → `main`.

## &#x20;Git commands used

```bash
git clone / git status / git add / git commit -m
git branch / git switch -c / git merge
git push -u origin <branch> / git pull
git log --oneline --graph --all
```

## &#x20;Conflict management (assignment requirement)

**Cause:** The hero tagline in index.html was changed to "a thousand detours" on develop, while feature-hero-v2 (branched from one commit earlier) reworded the same line to "one thread to follow". Merging made both versions collide on the same line.
**Resolution method:**

1. `git merge feature-hero-v2` → conflict reported in `index.html`
2. Opened the file, analyzed the `<<<<<<<`, `=======`, `>>>>>>>` markers
3. Chose which version to keep: kept the develop version ("a thousand detours"), the newer deliberate wording; the branch variant was discarded
4. `git add index.html` then `git commit` to finalize the merge
5. Checked with `git log --graph` that the history is clean

**Screenshot / resolution commit:** resolution merge commit 36fc3eb

## &#x20;CI/CD pipeline

The `.github/workflows/ci.yml` workflow runs on every push and PR
to `main` and `develop`:

1. **Test** — HTML validation (`htmlhint`) and CSS lint (`stylelint`)
2. **Build** — Docker image build for `medina-atlas`
3. **Bonus: Scan** — image vulnerability analysis with Trivy

The `main` branch is protected: CI status must be green before any merge.

## &#x20;Issue traceability

| Issue | Label | Resolved by | Via | Status |

|---|---|---|---|---|

| #1 Set up the html/css/js structure | enhancement | `a3ba32d` | PR #8 | Closed |

| #2 Hero section and medina cards | enhancement | `a3ba32d` | PR #8 | Closed |

| #3 Souk search filter | enhancement | `bfb9181` | PR #10 | Closed |

| #4 Lantern (dark) mode | enhancement | `14ed1a0` | PR #10 | Closed |

| #5 Write the README | documentation | `3eb0738` | PR #13 | Closed |

| #6 Dockerfile on feature-docker-v1 | enhancement | `8af6769` | PR #11 | Closed |

| #7 GitHub Actions pipeline | enhancement | `33ebe6d` | direct to develop, released to main | Closed |

| #9 Empty-state message bug | bug | `f7ea799` | PR #10 | Closed |



## &#x20;Commit convention

`feat:` new feature · `fix:` bug correction · `docs:` documentation · `chore:` setup/config · `merge:` merge commits. Feature commits reference their issue (`closes #N`).



## &#x20;Identity note

Terminal commits appear as `SmurfPutin <kharrath2@gmail.com>`; merges made through the GitHub web UI appear as `Khalil <111258550+SmurfPutin@users.noreply.github.com>`. Both identities are the same author (repository owner).

