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
Equipment.create(name: 'Smith Machine')

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

workout = @testy.sessions.create ({name: 'Weights', started_at: '2017-08-28T14:30:00.000-04:00', completed_at: '2017-08-28T16:53:00.000-04:00'})
workout.liftsets.create([
  {
    "motion_id":8, "reps":6, "rest":270, "weight":103, "equipment_id":2, started: '2017-08-28T15:52:00.000-04:00', stopped: '2017-08-28T15:53:32.000-04:00'
  },
  {
    "motion_id":9, "reps":12, "rest":90, "weight":60, "equipment_id":2, started: '2017-08-28T15:55:32.000-04:00', stopped: '2017-08-28T15:57:32.000-04:00'
  },
  {
    "motion_id":9, "reps":10, "rest":90, "weight":70, "equipment_id":2, started: '2017-08-28T15:59:00.000-04:00', stopped: '2017-08-28T16:00:00.000-04:00'
  },
  {
    "motion_id":9, "reps":8, "rest":90, "weight":80, "equipment_id":2, started: '2017-08-28T16:01:30.000-04:00', stopped: '2017-08-28T16:02:00.000-04:00'
  },
  {
    "motion_id":9, "reps":6, "rest":270, "weight":100, "equipment_id":2, started: '2017-08-28T16:03:30.000-04:00', stopped: '2017-08-28T16:05:32.000-04:00'
  },
  {
    "motion_id":10, "reps":12, "rest":90, "weight":77, "equipment_id":2, started: '2017-08-28T16:07:02.000-04:00', stopped: '2017-08-28T16:07:32.000-04:00'
  },
  {
    "motion_id":10, "reps":12, "rest":90, "weight":88, "equipment_id":2, started: '2017-08-28T16:09:00.000-04:00', stopped: '2017-08-28T16:09:32.000-04:00'
  },
  {
    "motion_id":10, "reps":10, "rest":90, "weight":99, "equipment_id":2, started: '2017-08-28T16:11:02.000-04:00', stopped: '2017-08-28T16:11:32.000-04:00'
  },
  {
    "motion_id":10, "reps":6, "weight":110, "equipment_id":2, started: '2017-08-28T16:13:02.000-04:00', stopped: '2017-08-28T16:13:32.000-04:00'
  }
])

template = @testy.sessions.create ({name: 'Arnold_Chest_Back', created_at: '2017-08-28T14:30:00.000-04:00', completed_at: '2017-08-28T16:53:00.000-04:00', template: true})
template.liftsets.create([
  {
    "motion_id":1, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":1, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":1, "reps":8, "rest":90, "equipment_id":2
  },
  {
    "motion_id":1, "reps":6, "rest":90, "equipment_id":2
  },
  {
    "motion_id":1, "reps":4, "rest":270, "equipment_id":2
  },
  {
    "motion_id":2, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":2, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":2, "reps":8, "rest":90, "equipment_id":2
  },
  {
    "motion_id":2, "reps":6, "rest":90, "equipment_id":2
  },
  {
    "motion_id":2, "reps":4, "rest":270, "equipment_id":2
  },
  {
    "motion_id":3, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":3, "reps":10, "rest":90, "equipment_id":3
  },
  {
    "motion_id":3, "reps":8, "rest":90, "equipment_id":3
  },
  {
    "motion_id":3, "reps":6, "rest":270, "equipment_id":3
  },
  {
    "motion_id":4, "reps":12, "rest":90
  },
  {
    "motion_id":4, "reps":10, "rest":90
  },
  {
    "motion_id":4, "reps":8, "rest":90
  },
  {
    "motion_id":4, "reps":6, "rest":270
  },
  {
    "motion_id":5, "reps":12, "rest":90, "equipment_id":1
  },
  {
    "motion_id":5, "reps":10, "rest":90, "equipment_id":1
  },
  {
    "motion_id":5, "reps":8, "rest":90, "equipment_id":1
  },
  {
    "motion_id":5, "reps":6, "rest":270, "equipment_id":1
  },
  {
    "motion_id":6, "reps":12, "rest":90, "equipment_id":1
  },
  {
    "motion_id":6, "reps":10, "rest":90, "equipment_id":1
  },
  {
    "motion_id":6, "reps":8, "rest":90, "equipment_id":1
  },
  {
    "motion_id":6, "reps":8, "rest":270, "equipment_id":1
  },
  {
    "motion_id":7, "reps":15, "rest":90, "equipment_id":1
  },
  {
    "motion_id":7, "reps":12, "rest":90, "equipment_id":1
  },
  {
    "motion_id":7, "reps":10, "rest":90, "equipment_id":1
  },
  {
    "motion_id":7, "reps":8, "rest":90, "equipment_id":1
  },
  {
    "motion_id":7, "reps":8, "rest":270, "equipment_id":1
  },
  {
    "motion_id":8, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":8, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":8, "reps":8, "rest":90, "equipment_id":2
  },
  {
    "motion_id":8, "reps":6, "rest":270, "equipment_id":2
  },
  {
    "motion_id":9, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":9, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":9, "reps":8, "rest":90, "equipment_id":2
  },
  {
    "motion_id":9, "reps":6, "rest":270, "equipment_id":2
  },
  {
    "motion_id":10, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":10, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":10, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":10, "reps":6, "rest":270, "equipment_id":2
  }
])

template = @testy.sessions.create ({name: 'Arnold_Shoulders_Arms', created_at: '2017-08-28T14:30:00.000-04:00', completed_at: '2017-08-28T16:53:00.000-04:00', template: true})
template.liftsets.create([
  {
    "motion_id":22, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":22, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":22, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":22, "reps":8, "rest":270, "equipment_id":2
  },
  {
    "motion_id":23, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":23, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":23, "reps":10, "rest":90, "equipment_id":3
  },
  {
    "motion_id":23, "reps":8, "rest":270, "equipment_id":3
  },
  {
    "motion_id":22, "reps":12, "rest":90, "equipment_id":5
  },
  {
    "motion_id":22, "reps":10, "rest":90, "equipment_id":5
  },
  {
    "motion_id":22, "reps":10, "rest":90, "equipment_id":5
  },
  {
    "motion_id":22, "reps":8, "rest":270, "equipment_id":5
  },
  {
    "motion_id":24, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":24, "reps":10, "rest":90, "equipment_id":3
  },
  {
    "motion_id":24, "reps":10, "rest":270, "equipment_id":3
  },
  {
    "motion_id":26, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":26, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":26, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":26, "reps":8, "rest":270, "equipment_id":2
  },
  {
    "motion_id":16, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":16, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":16, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":16, "reps":10, "rest":270, "equipment_id":2
  },
  {
    "motion_id":19, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":19, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":19, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":19, "reps":10, "rest":270, "equipment_id":2
  },
  {
    "motion_id":16, "reps":12, "rest":0, "equipment_id":3
  },
  {
    "motion_id":17, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":16, "reps":12, "rest":0, "equipment_id":3
  },
  {
    "motion_id":17, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":16, "reps":10, "rest":0, "equipment_id":3
  },
  {
    "motion_id":17, "reps":10, "rest":90, "equipment_id":3
  },
  {
    "motion_id":16, "reps":10, "rest":0, "equipment_id":3
  },
  {
    "motion_id":17, "reps":10, "rest":270, "equipment_id":3
  },
])





