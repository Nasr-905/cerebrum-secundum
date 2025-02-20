They're good for allowing some projects to simulate having their own dedicated setup (computer). So that:
- You don't need to give the program admin permissions.
- It's especially good if you don't think you'll be using the program anywhere else.
- Prevents conflicts
	- say you like python3, but need python2 for a program, just install python2 in the environment
- You can always close and open past environments.

# Pip & Venv vs. Conda Package Management

- **`pip`**: Installs Python packages from **PyPI**. It resolves dependencies but doesn’t handle system libraries.
- **`conda`**: Installs packages from **Anaconda repositories**. It manages both **Python and system dependencies**, making it more reliable for scientific computing.

Use **`pip`** for general Python packages and **`conda`** for scientific/ML packages with complex dependencies.

- **`venv`**: Only manages Python environments; you install packages with `pip`. Doesn't handle system dependencies.
- **`conda`**: Manages both **Python environments and system dependencies** (e.g., CUDA, MKL). Works with `conda` packages instead of just `pip`.

Use **`venv`** for lightweight projects and **`conda`** for ML, data science, or complex dependencies.

# Handling Virtual Environments
## Create
```sh
conda create --name env_name python=3.10
```
## Activate
```bash
conda activate env_name
```

## Deactivate
```sh
conda deactivate
```


# Terminology
- Global Environment is called *base*