let navBar = {
    render: async () => {
        let view = `<header class="d-flex flex-wrap justify-content-center py-3 mb-4">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                    <span class="fs-4">Luiz Felipe Dev</span>
                </a>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 link-dark">Services</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">Portfolio</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">Contact</a></li>
                </ul>
            </header>`;

        return view;
    }
};

export default navBar;