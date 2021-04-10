# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
2.times do
  wishlist = Wishlist.create(
  name: Faker::Name.name,  
  description: Faker::Lorem.sentence
  )

  2.times do 
    category = Category.create(
      genre: Faker::FunnyName.name,
      img: Faker::Avatar.image
      
    )

    2.times do
      
      Item.create(
        name: Faker::Device.model_name ,
        price: Faker::Commerce.price(range: 0..10.0, as_string: true)
        category_id: category.id
      )
    end
  end
end

puts "Data Seeded."
