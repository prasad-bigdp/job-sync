
# 🧠 JobSync AI Internship Project - Collaboration Guide

Welcome to the **JobSync AI Internship Repository**! This document outlines the complete collaboration process, including how to contribute, commit, push, and submit pull requests. Please read this carefully before starting.

---

## 📁 Repository Structure

```
jobsync/
├── client/                # Frontend (React)
├── server/                # Backend (Node.js + Express + MongoDB)
├── docs/                  # Design & planning docs
└── readme.md
```

---

## 👥 Team Collaboration Workflow

This project follows a strict **Pull Request (PR)** workflow:

| Role         | Responsibility |
|--------------|----------------|
| Students     | Work on feature branches, submit PRs |
| Team Leads   | Review & approve team PRs to `dev` |
| Project Lead | Approves final merges from `dev` to `main` |

---

## 🌱 Branching Strategy

- `main` – Production-ready (only Project Lead merges here)
- `dev` – Latest working version (all PRs go here)
- `group-x-feature` – Individual team feature branches

Example: `group-1-auth`, `group-5-apply`

---

## ✅ Rules for All Collaborators

1. **Do NOT push directly to `main` or `dev`.**
2. Always work in your team’s feature branch (e.g., `group-3-job-api`).
3. Commit messages should follow format:  
   `feat(auth): added login page`  
   `fix(job): fixed job list bug`

4. Open a **Pull Request** from your branch to `dev`.
5. Assign your **Team Lead** as the reviewer.
6. After team lead review, Project Lead will merge to `main` weekly.

---

## 📦 Setup Instructions

```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/jobsync-internship.git

# Navigate to client and install frontend dependencies
cd jobsync/client
npm install

# Navigate to server and install backend dependencies
cd ../server
npm install

# Create .env file in server/ and add MongoDB & Cloudinary keys
```

---

## 🧪 Testing

Each team must test their own modules before requesting review. Group 8 will assist with integration testing.

---

## 🛠 Tools Used

- React (frontend)
- Node.js, Express (backend)
- MongoDB (database)
- Cloudinary (resume upload)
- GitHub Projects (task board)
- GitHub PR Reviews (code review flow)

---

## 📅 Weekly Schedule

| Day | Task |
|-----|------|
| Mon | Feature development |
| Wed | Internal review by leads |
| Fri | PR review by Project Lead and merge to `main` |

---

## 🧑‍💻 Code of Conduct

- Be respectful in reviews and comments.
- Commit small, meaningful changes.
- Follow team leads' instructions.
- Ask questions — help each other grow!

---

## 📆 Last Updated: 2025-04-29

Happy Building 🚀  
– JobSync AI Project Lead
