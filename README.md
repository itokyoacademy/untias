# iTokyo Academy UNITAS Website Redesign

This project contains the redesigned website for iTokyo Academy's UNITAS program information page.

## Files and Directories

The main files and directories for the website are:

- `index.html`: The main HTML file for the website.
- `css/`: Directory containing CSS files.
    - `style.css`: Custom styles for the website.
    - `bootstrap.min.css`: Bootstrap 5 CSS framework.
- `js/`: Directory containing JavaScript files.
    - `script.js`: Custom JavaScript for website interactivity (e.g., scroll-to-top button).
    - `bootstrap.bundle.min.js`: Bootstrap 5 JavaScript bundle (includes Popper.js).
- `images/`: Directory containing images.
    - `placeholder.svg`: A placeholder image used in the design.

## Deployment to GitHub Pages

These instructions assume you have a local copy of this repository and have it connected to your GitHub account. The website will be deployed to `itokyoacademy.github.io/untias/`.

**Important:** Since your GitHub Pages site is a project site (e.g., `username.github.io/repository-name`), GitHub Pages will typically serve from a specific branch (like `gh-pages` or `main`) or a `/docs` folder on the `main` branch.

**Steps:**

1.  **Navigate to Your Local Repository:**
    Open your terminal or command prompt and navigate to the root directory of this project on your local machine.
    ```bash
    cd path/to/your/local/repository
    ```

2.  **Ensure Correct Branch:**
    Make sure you are on the branch that your GitHub Pages site (`itokyoacademy.github.io/untias/`) is configured to serve from.
    *   If you have a dedicated `gh-pages` branch for deployment, switch to it:
        ```bash
        git checkout gh-pages
        git merge main # Or the branch where your latest changes are
        ```
    *   If you are serving from the `main` branch (or another branch like `master`), switch to it:
        ```bash
        git checkout main
        ```
    *   **Verify your GitHub Pages settings:** Go to your `untias` repository on GitHub -> Settings -> Pages. Check the "Source" setting to confirm which branch and folder (root `/` or `/docs`) are being used. Adjust the following steps if you are serving from a `/docs` folder (you would need to move all these files into a `/docs` folder). For this project, we assume you are serving from the root of your chosen deployment branch.

3.  **Stage All Changes:**
    Add all the new and modified files to the Git staging area.
    ```bash
    git add .
    ```

4.  **Commit the Changes:**
    Commit the staged files with a descriptive message.
    ```bash
    git commit -m "Deploy redesigned website to GitHub Pages"
    ```

5.  **Push to GitHub:**
    Push your local commits to the remote repository on GitHub. Replace `your-deployment-branch` with the actual branch name you identified in Step 2 (e.g., `gh-pages`, `main`).
    ```bash
    git push origin your-deployment-branch
    ```
    For example, if deploying from the `main` branch:
    ```bash
    git push origin main
    ```
    Or, if deploying from `gh-pages`:
    ```bash
    git push origin gh-pages
    ```

6.  **Verify Deployment:**
    *   Wait a few minutes for GitHub Pages to build and deploy your site.
    *   Open your browser and navigate to `https://itokyoacademy.github.io/untias/` to see the updated website.
    *   If you encounter issues, check the "Actions" tab in your GitHub repository for any build errors from GitHub Pages. Also, double-check your repository's GitHub Pages settings.

**Note on Base URL and Asset Paths:**
The current links in `index.html` (e.g., `css/style.css`, `js/script.js`) are relative paths. If your GitHub Pages site for the `untias` repository is correctly configured to serve from the root of the deployment branch, these paths should work correctly under `https://itokyoacademy.github.io/untias/`. For example, `css/style.css` will be resolved as `https://itokyoacademy.github.io/untias/css/style.css`. No changes to asset paths should be needed if this is the case.

If your site were a user/organization site (e.g., `itokyoacademy.github.io` directly, without `/untias/`), the paths would also work from the root of that repository's deployment branch. The key is that the paths are relative to the `index.html` file's location within the deployment source.
---

This `README.md` provides the necessary deployment instructions.
All tasks for this subtask are now complete.
I will submit the report.
