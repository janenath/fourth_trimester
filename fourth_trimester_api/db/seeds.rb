# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

articles = Article.create([
    {
        title: "hydration",
        content: "hydration is really important",
        week: "1",
        image: "https://images.unsplash.com/photo-1539805015143-9f78208ec73f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
    }
])