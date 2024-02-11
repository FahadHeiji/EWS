
### Status: #week-14

### Tags: #EWS  , #Programming 


Session Storage is a part of the Web Storage API, along with Local Storage. It provides a way to store data on the client side for the duration of a browser session. [The data stored in Session Storage gets cleared when the page session ends, which occurs when the page is closed](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)[1](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies).

Here are some use cases for Session Storage:

1. [**Storing temporary data for a single user session**: This could be useful for storing a shopping cart’s contents between pages before checkout, or storing form data between pages in a multi-step process](https://www.ramotion.com/blog/what-is-web-storage/)[2](https://www.ramotion.com/blog/what-is-web-storage/).
2. [**Storing user preferences or settings for a single session**: This could include UI state, such as the currently selected tab](https://stackoverflow.com/questions/8498357/when-should-i-use-html5-sessionstorage)[3](https://stackoverflow.com/questions/8498357/when-should-i-use-html5-sessionstorage).
3. [**Short-term caching or usage data about a specific visit to your site**: This could be useful for analytics or personalization](https://www.makeuseof.com/session-local-storage-differences/)[4](https://www.makeuseof.com/session-local-storage-differences/).
4. [**Storing session-specific data in web applications**: For example, you might store the ID of a single object you’re working on several pages deep, like a currentInvoiceId](https://stackoverflow.com/questions/8498357/when-should-i-use-html5-sessionstorage)[3](https://stackoverflow.com/questions/8498357/when-should-i-use-html5-sessionstorage).

Remember, Session Storage is tab-specific. [If your user opens the same page twice in two different tabs, each tab would have its own storage area](https://stackoverflow.com/questions/8498357/when-should-i-use-html5-sessionstorage)[3](https://stackoverflow.com/questions/8498357/when-should-i-use-html5-sessionstorage). This makes Session Storage ideal for situations where you want to isolate data between multiple open tabs or windows. [However, it’s important to note that Session Storage, like Local Storage, is not secure and should not be used to store sensitive information](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)[1](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies).
______________________________________________________________________


## Related : 

- [[Local Storage]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-11 14:44 
  
  
   ## Modification date :
   
   Thursday 11th January 2024 17:30:38