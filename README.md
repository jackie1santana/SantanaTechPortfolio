### Jackie Santana's Portfolio

Welcome to my portfolio, a creative fusion of art and technology, meticulously crafted by Jackie Santana.

#### Design Inspiration
My design philosophy embraces both artistic sensibility and visionary thinking, resulting in a cohesive and engaging user experience.

#### Technologies Utilized
In building the majority of my projects, I leveraged the power of several cutting-edge technologies:
- **React | Vue.js**: For robust UI development
- **Vanilla JavaScript**: Offering flexibility and control
- **Paper.js**: Bringing vector graphics to life
- **Howler.js**: Managing sound across web applications
- **jQuery**: For easy and efficient DOM manipulation
- **Firebase**: Used as a database for handling form data

#### Optimization Techniques
Ensuring optimal performance, I implemented several optimization strategies:
- **Image Compression**: Utilizing tools like Jpeg Optimizer and TinyPNG to reduce image size
- **Server-Side Compression**: Applying gzip compression for efficient data transfer
- **JavaScript Minification**: Using Uglify to minify JavaScript files, enhancing load times
const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
    .then(res => {
      if (!res.ok) {
        return Promise.reject({ status: res.status, msg: 'Fetch failed' }); // Not an Error object
      }
      return res.json();
    });
};

try {
  await getData();
} catch (err) {
  console.log('Caught error:', err.message); // ❌ Crashes if err is just a plain object
}
#### Building Process
I initially experimented with parcel bundler, but encountered challenges with PDF files. I opted for manually minifying files through online tools, retaining the original versions under "unminified." This approach ensured an efficient building process without compromising the integrity of the content.

#### Hosting
The portfolio is hosted on a Linode server, offering reliable performance and scalability.
