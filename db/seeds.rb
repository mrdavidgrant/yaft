# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

(1..10) do
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Internet.username, password_digest: Faker::Internet.password)
end

Equipment.create(name: 'Atlas Machine')
Equipment.create(name: 'Barbell')
Equipment.create(name: 'Dumbell')
Equipment.create(name: 'Kettlebell')

chest = BodyParts.create(name: 'chest')
back = BodyParts.create(name: 'back')
arms = BodyParts.create(name: 'arms')
shoulders = BodyParts.create(name: 'shoulders')
legs = BodyParts.create(name: 'legs')

chest.motions.create([{
  name: 'Bench Press'
},{
  name: 'Incline Bench Press'
},{
  name: 'Flye'
},{
  name: 'Chest Dip'
},{
  name: 'Pulldown Flye'
}])

back.motions.create([{
  name: 'Back Pulldown'
},{
  name: 'Front Pulldown'
},{
  name: 'T Bar Row'
},{
  name: 'Bent Over Row'
},{
  name: 'Seated Cable Row'
}])

legs.motions.create([{
  name: 'Squat'
},{
  name: 'Leg Extension'
},{
  name: 'Leg Curl'
},{
  name: 'Deadlift'
},{
  name: 'Calf Extension'
}])

arms.motions.create([{
  name: 'Bicep Curl'
},{
  name: 'Tri Pushdown'
},{
  name: 'Incline Curl'
},{
  name: 'Tri Extension'
},{
  name: 'Concentration Curl'
},{
  name: 'Bench Dips'
}])

shoulders.motions.create([{
  name: 'Military Press'
},{
  name: 'Side Lat Raise'
},{
  name: 'Front Lat Raise'
},{
  name: 'Shrug'
},{
  name: 'Upright Row'
}])