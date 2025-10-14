fetch("https://cjagroxccgawxxehdode.supabase.co/functions/v1/getBooks")
  .then(r => r.json())
  .then(res => console.log(res.books))
  .catch(console.error);
