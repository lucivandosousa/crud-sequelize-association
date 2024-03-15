const express = require("express")
const { User, Address } = require("./models")

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("crud-sequelize-association")
})

app.post("/users", async (req, res) => {
  const { ... data } = req.body
  await User.create(data)

  res.status(201).send("Usuário cadastrado")
})

app.get("/users", async (req, res) => {
  const users = await User.findAll({
    order: [["id", "ASC"]]
  })

  res.status(200).json(users)
})

app.get("/users/:id", async (req, res) => {
  const { id } = req.params
  const user = await User.findByPk(id)

  res.status(200).json(user)
})

app.put("/users/:id", async (req, res) => {
  const { id } = req.params
  const { ...data } = req.body
  const user = await User.findByPk(id)

  if (!user) {
    res.status(404).send("Usuário não localizado")
    return
  }

  await User.update(data, {
    where: {id: id}
  })

  res.status(200).send("Usuário atualizado")
})

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params
  const user = await User.findByPk(id)

  if (!user) {
    res.status(404).send("Usuário não localizado")
    return
  }

  await User.destroy({
    where: { id: id }
  })

  res.status(200).send("Usuário excluído")
})

app.post("/users/:user_id/address", async (req, res) => {
  const { user_id } = req.params
  const { ...data } = req.body
  const user = await User.findByPk(user_id)

  if (!user) {
    res.status(404).send("Usuário não localizado")
    return
  }

  const newAddress = {
    ...data,
    "user_id": user_id,
    "createdAt": new Date(),
    "updatedAt": new Date()
  }

  await Address.create(newAddress)
  res.status(201).send("Endereço cadastrado")
})

app.get("/users/:user_id/address", async (req, res) => {
  const { user_id } = req.params
  const user = await User.findByPk(user_id, {
    include: {
      association: "addresses"
    }
  })

  if (!user) {
    res.status(404).send("Usuário não localizado")
    return
  }

  res.status(200).json(user.addresses)
})

app.listen(PORT, console.log(`Server listening on port ${PORT}`))