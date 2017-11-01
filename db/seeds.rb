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

chest = BodyPart.create(name: 'chest', image: 'chest.jpg')
back = BodyPart.create(name: 'back', image: 'back.jpg')
arms = BodyPart.create(name: 'arms', image: 'arms.jpg')
shoulders = BodyPart.create(name: 'shoulders', image: 'shoulders.jpg')
legs = BodyPart.create(name: 'legs', image: 'legs.jpg')
core = BodyPart.create(name: 'core', image: 'core.jpg')

chest.motions.create([{
  name: 'Bench Press',
  image: 'benchpress.jpg'
},{
  name: 'Incline Bench Press',
  image: 'inclinebenchpress.jpg'
},{
  name: 'Flye',
  image: 'flye.jpg'
},{
  name: 'Chest Dip',
  image: 'chestdip.jpg'
},{
  name: 'Pulldown Flye',
  image: 'pulldownflye.jpg'
},{
  name: 'Pushup',
  image: 'pushup.jpg'
}])

back.motions.create([{
  name: 'Back Pulldown',
  image: 'backpulldown.jpg'
},{
  name: 'Front Pulldown',
  image: 'frontpulldown.jpg'
},{
  name: 'T Bar Row',
  image: 'tbarrow.jpg'
},{
  name: 'Bent Over Row',
  image: 'bentoverrow.jpg'
},{
  name: 'Seated Cable Row',
  image: 'seatedcablerow.jpg'
}])

legs.motions.create([{
  name: 'Squat',
  image: 'squat.jpg'
},{
  name: 'Leg Extension',
  image: 'legextension.jpg'
},{
  name: 'Leg Curl',
  image: 'legcurl.jpg'
},{
  name: 'Deadlift',
  image: 'deadlift.jpg'
},{
  name: 'Calf Extension',
  image: 'calfextension.jpg'
},{
  name: 'Romanian Deadlift',
  image: 'romaniandeadlift.jpg'
}])

arms.motions.create([{
  name: 'Bicep Curl',
  image: 'bicepcurl.jpg'
},{
  name: 'Tri Pushdown',
  image: 'tripushdown.jpg'
},{
  name: 'Incline Curl',
  image: 'inclinecurl.jpg'
},{
  name: 'Tri Extension',
  image: 'triextension.jpg'
},{
  name: 'Concentration Curl',
  image: 'concentrationcurl.jpg'
},{
  name: 'Bench Dips',
  image: 'benchdips.jpg'
}])

shoulders.motions.create([{
  name: 'Military Press',
  image: 'militarypress.jpg'
},{
  name: 'Side Lat Raise',
  image: 'sidelatraise.jpg'
},{
  name: 'Front Lat Raise'
},{
  name: 'Shrug',
  image: 'shrug.jpg'
},{
  name: 'Upright Row',
  image: 'uprightrow.jpg'
}])

core.motions.create([{
  name: 'Kettlebell Swing',
  image: 'kettlebellswing.jpg'
},{
  name: 'Crunch',
  image: 'crunch.jpg'
},{
  name: 'Sit-Up',
  image: 'situp.jpg'
}])

@testy = User.create(display_name: 'David G.', user_id: '24X947', age: 40, avatar: "https://d6y8zfzc2qfsl.cloudfront.net/5BCEC0FC-8CC3-EC4A-DD43-83C2727D8768_profile_100_square.jpg", dob: "1977-06-11", first_name: "David", last_name: "Grant", full_name: "David Grant", gender: 'MALE', height_cm: 188, weight_kg: 95)

workout = @testy.sessions.create ({name: 'Weights', started_at: '2017-08-28T14:30:00.000-04:00', completed_at: '2017-08-28T16:53:00.000-04:00'})
workout.liftsets.create([
  {
    "motion_id":8, "reps":12, "rest":90, "weight":28, "equipment_id":2, started: '2017-08-28T15:45:32.000-04:00', stopped: '2017-08-28T15:46:32.000-04:00'
  },
  {
    "motion_id":8, "reps":10, "rest":90, "weight":53, "equipment_id":2, started: '2017-08-28T15:48:00.000-04:00', stopped: '2017-08-28T15:48:15.000-04:00'
  },
  {
    "motion_id":8, "reps":8, "rest":90, "weight":78, "equipment_id":2, started: '2017-08-28T15:49:45.000-04:00', stopped: '2017-08-28T15:50:32.000-04:00'
  },
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

template = @testy.sessions.create ({name: 'Arnold_Chest_Back', created_at: '2017-08-28T14:30:00.000-04:00', completed_at: '2017-08-28T16:53:00.000-04:00', template: true, notes: "Arnold Schwarzenegger's Mammoth Chest And Back Workout. Basic exercises, heavy weights, high volume, and high frequency are the techniques Arnold Schwarzenegger used to build his massive chest and back. Try the workout!"})
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
    "motion_id":8, "reps":15, "rest":90, "equipment_id":1
  },
  {
    "motion_id":8, "reps":12, "rest":90, "equipment_id":1
  },
  {
    "motion_id":8, "reps":10, "rest":90, "equipment_id":1
  },
  {
    "motion_id":8, "reps":8, "rest":90, "equipment_id":1
  },
  {
    "motion_id":8, "reps":8, "rest":270, "equipment_id":1
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
    "motion_id":10, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":10, "reps":8, "rest":90, "equipment_id":2
  },
  {
    "motion_id":10, "reps":6, "rest":270, "equipment_id":2
  },
  {
    "motion_id":11, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":11, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":11, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":11, "reps":6, "rest":270, "equipment_id":2
  }
])

template = @testy.sessions.create ({name: 'Arnold_Shoulders_Arms', created_at: '2017-08-28T14:30:00.000-04:00', completed_at: '2017-08-28T16:53:00.000-04:00', template: true, notes: "Arnold's Blueprint For Mammoth Shoulders And Arms. No bodybuilder was as renowned as Arnold for his huge arms and massive delts. And no bodybuilder trained as hard. Here's a peek at how Arnold's high-volume, high-frequency approach made him the world's greatest bodybuilder."})
template.liftsets.create([
  {
    "motion_id":24, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":24, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":24, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":24, "reps":8, "rest":270, "equipment_id":2
  },
  {
    "motion_id":25, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":25, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":25, "reps":10, "rest":90, "equipment_id":3
  },
  {
    "motion_id":25, "reps":8, "rest":270, "equipment_id":3
  },
  {
    "motion_id":24, "reps":12, "rest":90, "equipment_id":5
  },
  {
    "motion_id":24, "reps":10, "rest":90, "equipment_id":5
  },
  {
    "motion_id":24, "reps":10, "rest":90, "equipment_id":5
  },
  {
    "motion_id":24, "reps":8, "rest":270, "equipment_id":5
  },
  {
    "motion_id":26, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":26, "reps":10, "rest":90, "equipment_id":3
  },
  {
    "motion_id":26, "reps":10, "rest":270, "equipment_id":3
  },
  {
    "motion_id":28, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":28, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":28, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":28, "reps":8, "rest":270, "equipment_id":2
  },
  {
    "motion_id":18, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":18, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":18, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":18, "reps":10, "rest":270, "equipment_id":2
  },
  {
    "motion_id":21, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":21, "reps":12, "rest":90, "equipment_id":2
  },
  {
    "motion_id":21, "reps":10, "rest":90, "equipment_id":2
  },
  {
    "motion_id":21, "reps":10, "rest":270, "equipment_id":2
  },
  {
    "motion_id":18, "reps":12, "rest":0, "equipment_id":3
  },
  {
    "motion_id":19, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":18, "reps":12, "rest":0, "equipment_id":3
  },
  {
    "motion_id":19, "reps":12, "rest":90, "equipment_id":3
  },
  {
    "motion_id":18, "reps":10, "rest":0, "equipment_id":3
  },
  {
    "motion_id":19, "reps":10, "rest":90, "equipment_id":3
  },
  {
    "motion_id":18, "reps":10, "rest":0, "equipment_id":3
  },
  {
    "motion_id":19, "reps":10, "rest":270, "equipment_id":3
  },
])

template = @testy.sessions.create ({name: "DEMO", template: true, notes: "For when time is of the essence"})
template.liftsets.create([
  {
    "motion_id":17, "reps":5, "weight":35, "rest":60, "equipment_id":4
  },
  {
    "motion_id":17, "reps":5, "weight":35, "rest":60, "equipment_id":4
  },
  {
    "motion_id":17, "reps":5, "weight":35, "rest":60, "equipment_id":4
  },
  {
    "motion_id":24, "reps":5, "weight":35, "rest":0, "equipment_id":4
  }
])



