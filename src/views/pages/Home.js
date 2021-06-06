import programmerGif from '../../images/programmer.gif';

let Home = {
    render: async () => {
        let view = `<div class="row">
            <div class="col-4 bg-light border rounded-3">col-4</div>
            <div class="col-8 bg-light border rounded-3">
                <img src=${programmerGif} class="img-fluid" alt="">
            </div>
        </div>`;

        return view;
    }
}

export default Home;