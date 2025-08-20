# Code Quality and Linting

This project uses MegaLinter to ensure code quality and consistency across all files. MegaLinter runs 
automatically on every push and pull request via GitHub Actions in **report-only mode** - it identifies 
issues but does not automatically apply fixes.

## Linters Enabled

The following linters are configured for this project:

### Core Linters
- **ESLint**: JavaScript/Node.js code linting with HOF-specific configuration
- **Stylelint**: CSS/SCSS styling and formatting
- **HTMLHint**: HTML template validation
- **Markdownlint**: Markdown documentation formatting
- **JSONLint**: JSON file validation
- **YAMLLint**: YAML file validation

### Infrastructure & DevOps
- **Hadolint**: Dockerfile best practices
- **Shellcheck**: Shell script analysis
- **ActionLint**: GitHub Actions workflow validation

### Quality Assurance
- **CSpell**: Spell checking across all text files

## Running Linters Locally

### All linters via MegaLinter
```bash
# Install MegaLinter
npm install mega-linter-runner --save-dev

# Run all linters
npx mega-linter-runner
```

### Individual linters
```bash
# JavaScript linting
npm run lint
npm run lint:fix

# Format code
npm run format
```

## Configuration Files

- `.mega-linter.yml` - Main MegaLinter configuration
- `.eslintrc.js` - ESLint configuration extending HOF defaults
- `.stylelintrc.json` - Stylelint configuration for SCSS
- `.htmlhintrc` - HTMLHint configuration for templates
- `.markdownlint.json` - Markdownlint configuration
- `.cspell.json` - CSpell spell checker configuration
- `.yamllint.yml` - YAML linting configuration

## CI/CD Integration

MegaLinter runs automatically in GitHub Actions in **report-only mode**:

- On every push to any branch
- On every pull request to master/main
- Generates detailed reports for all linting issues
- **Does not apply fixes automatically** - issues are reported only
- Creates downloadable artifacts with full linting reports

The workflow can be found in `.github/workflows/.megalinter.yml`.

## Viewing Reports

After MegaLinter runs in CI:

1. Go to the Actions tab in your GitHub repository
2. Click on the MegaLinter workflow run
3. Download the "MegaLinter reports" artifact
4. Extract and open `megalinter-reports/megalinter.html` for a detailed report

## Customization

To modify linting rules:
1. Update the relevant configuration file (e.g., `.eslintrc.js` for JavaScript rules)
2. For MegaLinter-specific settings, modify `.mega-linter.yml`
3. Test changes locally before committing

## Excluding Files

Files and directories are excluded from linting via:
- `FILTER_REGEX_EXCLUDE` in `.mega-linter.yml` for global exclusions
- Individual linter configuration files for linter-specific exclusions
- `.gitignore` patterns are automatically respected
