# Medina Atlas 🕌

A static mini-site (HTML / CSS / JS) presenting three Tunisian medinas, built
for the **DS DevOps** project: Git/GitHub collaboration, Docker
containerization and a CI/CD pipeline with GitHub Actions.

> ⚠️ Personalize before pushing: replace everything in `[brackets]`.

## 👥 Members

- [First LAST — @github-handle] (repository owner)
- [Invited collaborator: the teacher / @handle]

## 📁 Project structure

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

## 🚀 Installation and run

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

## 🌿 Branching strategy

| Branch | Role |
|---|---|
| `main` | Stable, protected: merges only via PR with green CI |
| `develop` | Integration: features are merged here first |
| `feature-*` | One branch per feature (e.g. `feature-souk-filter`) |
| `feature-docker-v1` | Dedicated containerization branch (assignment requirement) |

Workflow: `feature-*` → PR to `develop` → PR `develop` → `main`.

## 🛠️ Git commands used

```bash
git clone / git status / git add / git commit -m
git branch / git switch -c / git merge
git push -u origin <branch> / git pull
git log --oneline --graph --all
```

## 💥 Conflict management (assignment requirement)

**Cause:** [e.g. the hero tagline line in `index.html` was changed
differently on `feature-hero-v2` and on `develop`, then the two branches
were merged.]

**Resolution method:**
1. `git merge feature-hero-v2` → conflict reported in `index.html`
2. Opened the file, analyzed the `<<<<<<<`, `=======`, `>>>>>>>` markers
3. Chose which version to keep: [which one and why]
4. `git add index.html` then `git commit` to finalize the merge
5. Checked with `git log --graph` that the history is clean

**Screenshot / resolution commit:** [link to the merge commit]

## ⚙️ CI/CD pipeline

The `.github/workflows/ci.yml` workflow runs on every push and PR
to `main` and `develop`:

1. **Test** — HTML validation (`htmlhint`) and CSS lint (`stylelint`)
2. **Build** — Docker image build for `medina-atlas`
3. **Bonus: Scan** — image vulnerability analysis with Trivy

The `main` branch is protected: CI status must be green before any merge.
