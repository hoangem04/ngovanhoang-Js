const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  };
  
  // Chuyển đổi sang chuỗi Json
  const str = JSON.stringify(post);
  
  console.log(str.id);
  
  // Phân tích cú pháp Json
  const obj = JSON.parse(str);
  
  console.log(obj.id);
  
  // JSON & Mảng
  const posts = [
    {
      id: 1,
      title: 'Post One',
      body: 'This is the body',
    },
    {
      id: 2,
      title: 'Post Two',
      body: 'This is the body',
    },
  ];
  
  const str2 = JSON.stringify(posts);
  
  console.log(str2);