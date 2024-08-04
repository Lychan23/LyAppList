document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('clone-form');
    const projectSelect = document.getElementById('project-select');
    const statusDiv = document.getElementById('status');

    // Example projects
    const projects = [
        { name: 'Ly.JSxPy', url: 'https://github.com/Lychan23/Ly.JSxPy.git' },
        { name: 'Ly.JS', url: 'https://github.com/Lychan23/Ly.JS.git' }
    ];

    // Populate project select dropdown
    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.url;
        option.textContent = project.name;
        projectSelect.appendChild(option);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const selectedProjectUrl = projectSelect.value;
        const folderPath = document.getElementById('folder-path').value;

        if (!selectedProjectUrl) {
            statusDiv.textContent = 'Please select a project.';
            return;
        }

        // Provide clone instructions
        const instructions = `
            To clone the selected project, use the following command in your terminal:
            <pre>git clone ${selectedProjectUrl}</pre>
            <br>
            You can specify the folder path by navigating to the desired directory before running the command.
        `;

        statusDiv.innerHTML = instructions;
    });
});
