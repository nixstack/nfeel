import App from './app'

const port = 9393

const server = new App()
  .start(port)
  .then(port => console.log(`Server running on port ${port}`))
  .catch(error => {
    console.log(error)
    process.exit(1)
  })

export default server
