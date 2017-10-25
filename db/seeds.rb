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

@testy = User.create(display_name: 'David G.', user_id: '24X947', age: 40, avatar: "https://d6y8zfzc2qfsl.cloudfront.net/5BCEC0FC-8CC3-EC4A-DD43-83C2727D8768_profile_100_square.jpg", dob: "1977-06-11", first_name: "David", last_name: "Grant", full_name: "David Grant", gender: 'MALE', height_cm: 188, weight_kg: 95)

workout = @testy.sessions.create ({name: 'Weights', created_at: '2017-08-28T14:30:00.000-04:00', completed_at: '2017-08-28T16:53:00.000-04:00'})
workout.liftsets.create([
  {
    "motion":1, "reps":12, "rest":90, "weight":50, "equipment":2
  },
  {
    "motion":1, "reps":10, "rest":90, "weight":60, "equipment":2
  },
  {
    "motion":1, "reps":8, "rest":90, "weight":70, "equipment":2
  },
  {
    "motion":1, "reps":6, "rest":90, "weight":85, "equipment":2
  },
  {
    "motion":1, "reps":4, "rest":270, "weight":90, "equipment":2
  },
  {
    "motion":2, "reps":12, "rest":90, "weight":25, "equipment":2
  },
  {
    "motion":2, "reps":10, "rest":90, "weight":35, "equipment":2
  },
  {
    "motion":2, "reps":8, "rest":90, "weight":45, "equipment":2
  },
  {
    "motion":2, "reps":6, "rest":90, "weight":50, "equipment":2
  },
  {
    "motion":2, "reps":4, "rest":270, "weight":55, "equipment":2
  },
  {
    "motion":3, "reps":12, "rest":90, "weight":20, "equipment":3
  },
  {
    "motion":3, "reps":10, "rest":90, "weight":25, "equipment":3
  },
  {
    "motion":3, "reps":8, "rest":90, "weight":30, "equipment":3
  },
  {
    "motion":3, "reps":6, "rest":270, "weight":35, "equipment":3
  },
  {
    "motion":4, "reps":12, "weight":170, "rest":90
  },
  {
    "motion":4, "reps":10, "weight":180, "rest":90
  },
  {
    "motion":4, "reps":8, "weight":190, "rest":90
  },
  {
    "motion":4, "reps":6, "weight":200, "rest":270
  },
  {
    "motion":5, "reps":12, "rest":90, "weight":15, "equipment":1
  },
  {
    "motion":5, "reps":10, "rest":90, "weight":20, "equipment":1
  },
  {
    "motion":5, "reps":8, "rest":90, "weight":25, "equipment":1
  },
  {
    "motion":5, "reps":6, "rest":270, "weight":30, "equipment":1
  },
  {
    "motion":6, "reps":12, "rest":90, "weight":77, "equipment":1
  },
  {
    "motion":6, "reps":10, "rest":90, "weight":88, "equipment":1
  },
  {
    "motion":6, "reps":8, "rest":90, "weight":99, "equipment":1
  },
  {
    "motion":6, "reps":8, "rest":270, "weight":110, "equipment":1
  },
  {
    "motion":7, "reps":15, "rest":90, "weight":77, "equipment":1
  },
  {
    "motion":7, "reps":12, "rest":90, "weight":88, "equipment":1
  },
  {
    "motion":7, "reps":10, "rest":90, "weight":99, "equipment":1
  },
  {
    "motion":7, "reps":8, "rest":90, "weight":110, "equipment":1
  },
  {
    "motion":7, "reps":8, "rest":270, "weight":121, "equipment":1
  },
  {
    "motion":8, "reps":12, "rest":90, "weight":28, "equipment":2
  },
  {
    "motion":8, "reps":10, "rest":90, "weight":53, "equipment":2
  },
  {
    "motion":8, "reps":8, "rest":90, "weight":78, "equipment":2
  },
  {
    "motion":8, "reps":6, "rest":270, "weight":103, "equipment":2
  },
  {
    "motion":9, "reps":12, "rest":90, "weight":60, "equipment":2
  },
  {
    "motion":9, "reps":10, "rest":90, "weight":70, "equipment":2
  },
  {
    "motion":9, "reps":8, "rest":90, "weight":80, "equipment":2
  },
  {
    "motion":9, "reps":6, "rest":270, "weight":100, "equipment":2
  },
  {
    "motion":10, "reps":12, "rest":90, "weight":77, "equipment":2
  },
  {
    "motion":10, "reps":12, "rest":90, "weight":88, "equipment":2
  },
  {
    "motion":10, "reps":10, "rest":90, "weight":99, "equipment":2
  },
  {
    "motion":10, "reps":6, "rest":270, "weight":110, "equipment":2
  }
])

template = @testy.sessions.create ({name: 'Arnold_Chest_Back', created_at: '2017-08-28T14:30:00.000-04:00', completed_at: '2017-08-28T16:53:00.000-04:00'})
template.liftsets.create([
  {
    "motion":1, "reps":12, "rest":90, "equipment":2
  },
  {
    "motion":1, "reps":10, "rest":90, "equipment":2
  },
  {
    "motion":1, "reps":8, "rest":90, "equipment":2
  },
  {
    "motion":1, "reps":6, "rest":90, "equipment":2
  },
  {
    "motion":1, "reps":4, "rest":270, "equipment":2
  },
  {
    "motion":2, "reps":12, "rest":90, "equipment":2
  },
  {
    "motion":2, "reps":10, "rest":90, "equipment":2
  },
  {
    "motion":2, "reps":8, "rest":90, "equipment":2
  },
  {
    "motion":2, "reps":6, "rest":90, "equipment":2
  },
  {
    "motion":2, "reps":4, "rest":270, "equipment":2
  },
  {
    "motion":3, "reps":12, "rest":90, "equipment":3
  },
  {
    "motion":3, "reps":10, "rest":90, "equipment":3
  },
  {
    "motion":3, "reps":8, "rest":90, "equipment":3
  },
  {
    "motion":3, "reps":6, "rest":270, "equipment":3
  },
  {
    "motion":4, "reps":12, "rest":90
  },
  {
    "motion":4, "reps":10, "rest":90
  },
  {
    "motion":4, "reps":8, "rest":90
  },
  {
    "motion":4, "reps":6, "rest":270
  },
  {
    "motion":5, "reps":12, "rest":90, "equipment":1
  },
  {
    "motion":5, "reps":10, "rest":90, "equipment":1
  },
  {
    "motion":5, "reps":8, "rest":90, "equipment":1
  },
  {
    "motion":5, "reps":6, "rest":270, "equipment":1
  },
  {
    "motion":6, "reps":12, "rest":90, "equipment":1
  },
  {
    "motion":6, "reps":10, "rest":90, "equipment":1
  },
  {
    "motion":6, "reps":8, "rest":90, "equipment":1
  },
  {
    "motion":6, "reps":8, "rest":270, "equipment":1
  },
  {
    "motion":7, "reps":15, "rest":90, "equipment":1
  },
  {
    "motion":7, "reps":12, "rest":90, "equipment":1
  },
  {
    "motion":7, "reps":10, "rest":90, "equipment":1
  },
  {
    "motion":7, "reps":8, "rest":90, "equipment":1
  },
  {
    "motion":7, "reps":8, "rest":270, "equipment":1
  },
  {
    "motion":8, "reps":12, "rest":90, "equipment":2
  },
  {
    "motion":8, "reps":10, "rest":90, "equipment":2
  },
  {
    "motion":8, "reps":8, "rest":90, "equipment":2
  },
  {
    "motion":8, "reps":6, "rest":270, "equipment":2
  },
  {
    "motion":9, "reps":12, "rest":90, "equipment":2
  },
  {
    "motion":9, "reps":10, "rest":90, "equipment":2
  },
  {
    "motion":9, "reps":8, "rest":90, "equipment":2
  },
  {
    "motion":9, "reps":6, "rest":270, "equipment":2
  },
  {
    "motion":10, "reps":12, "rest":90, "equipment":2
  },
  {
    "motion":10, "reps":12, "rest":90, "equipment":2
  },
  {
    "motion":10, "reps":10, "rest":90, "equipment":2
  },
  {
    "motion":10, "reps":6, "rest":270, "equipment":2
  }
])





