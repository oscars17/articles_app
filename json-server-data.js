const randomize = (max) => Math.floor(Math.random() * Math.floor(max));
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Sed bibendum dignissim fermentum. Sed at ultrices ex. ' +
    'Suspendisse venenatis ac ex sit amet eleifend. ' +
    'Phasellus id bibendum purus, non scelerisque leo. ' +
    'Fusce placerat purus eu justo varius, at volutpat quam pretium. ' +
    'Pellentesque vel dolor tempus mauris pellentesque tempor a ac tellus. ' +
    'Fusce id urna nunc. Nunc dignissim, turpis nec fringilla tincidunt, ' +
    'tellus est porttitor eros, non fringilla diam urna et enim. ' +
    'Proin dolor sem, dictum eu nisl nec, euismod commodo risus. ' +
    'Etiam vel aliquam tortor, quis interdum eros. ' +
    'Vestibulum odio elit, gravida in tellus vitae, posuere iaculis lorem. ' +
    'Integer non diam eget sem efficitur pulvinar eu quis diam.';
const theme = {
    Medicine: 'https://media.istockphoto.com/photos/' +
        'heap-of-medical-pills-in-white-blue-and-other-colors-pills-in-plastic-picture-' +
        'id943878650?k=6&m=943878650&s=612x612&w=0&h=0SVprN3_ho0u9S03ZfyBrpZgAZ-KZ2Jap2uYBFdhrWM=',
    Social: 'https://www.impactbnd.com/hubfs/representation-matters-in-stock-photos.jpg',
    Tech: 'https://www.fool.com.au/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg',
    Science: 'https://media.gettyimages.com/photos/' +
        'abstract-curly-tendrils-background-picture-id888421376?s=612x612',
}

module.exports = () => {
    let articleList = [];
    for (let i = 1; i < 20; i++) {
        const tag = Object.keys(theme)[randomize(3)];
        const image = theme[tag];
        const article = {
            id: i,
            tag: tag,
            text: text,
            date: new Date().toLocaleDateString('en-US'),
            image: image,
        }
        articleList.push(article);
    }
    return { articles: articleList };
}
