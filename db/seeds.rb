# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Equipment.create(name: 'Atlas Machine')
Equipment.create(name: 'Barbell')
Equipment.create(name: 'Dumbell')
Equipment.create(name: 'Kettlebell')

chest = BodyPart.create(name: 'chest')
back = BodyPart.create(name: 'back')
arms = BodyPart.create(name: 'arms')
shoulders = BodyPart.create(name: 'shoulders')
legs = BodyPart.create(name: 'legs')

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

@testy = User.create(display_name: 'testy', user_id: 'x12y45', age: 30, avatar: Faker::Avatar.image, dob: Faker::Date.date, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, full_name: Faker::Name.name, gender: 'MALE', height_cm: 188, weight_kg: 95)

3.times do
  @session = @testy.sessions.new(name: "weights")
  12.times do
    @session.liftsets.new(motion: Faker::Number.between(1,26), reps: Faker::Number.between(1,15), weight: (Faker::Number.between(1,30)*5), rest: Faker::Number.between(30,270), equipment: Faker::Number.between(1,4))
  end
  @session.save
end
