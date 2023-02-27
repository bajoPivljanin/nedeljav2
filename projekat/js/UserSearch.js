class UserSearch {
    constructor() {
      this.searchInput = document.querySelector('#search-input')
      this.searchBtn = document.querySelector('#aa')
      this.resultContainer = document.querySelector('#userneki')
      this.user = new User()
    }
  
    async search(query) {
      const results = await this.user.search(query)
      this.displayResults(results)
    }
  
    displayResults(results) {
      let html = ''
  
      results.forEach(user => {
        html += `<div>
                    <h4>Username: ${user.username}</h4>
                    <p>Email: ${user.email}</p>
                 </div>`
      })
  
      if (results.length === 0) {
        html = '<p>No results found</p>'
      }
  
      this.resultContainer.innerHTML = html
    }
  
    init() {
      this.searchBtn.addEventListener('click', () => {
        const query = this.searchInput.value
        this.search(query)
      })
    }
  }
  
  const userSearch = new UserSearch()
  userSearch.init()
  