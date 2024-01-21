// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });
console.table({ name: 'Hoàng', email: 'hoang@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);

const newstyles = 'padding: 10px;background-color:yellow; color:red';
console.log('%cHoàng đẹp trai', newstyles);

const styles1 = 'padding: 10px; background-color: green; color: yellow';
console.log('%cThăng chào các bạn nha!', styles1);