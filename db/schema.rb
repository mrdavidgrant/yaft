# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171031215811) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "body_parts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
  end

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "liftsets", force: :cascade do |t|
    t.integer "session_id"
    t.integer "reps"
    t.integer "weight"
    t.integer "rest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "started"
    t.datetime "stopped"
    t.bigint "motion_id"
    t.bigint "equipment_id"
    t.index ["equipment_id"], name: "index_liftsets_on_equipment_id"
    t.index ["motion_id"], name: "index_liftsets_on_motion_id"
  end

  create_table "motions", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "body_part_id"
    t.string "image"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "user_id"
    t.datetime "completed_at"
    t.text "heartrate"
    t.text "calories"
    t.boolean "template", default: false
    t.bigint "body_parts_id"
    t.datetime "started_at"
    t.text "notes"
    t.index ["body_parts_id"], name: "index_sessions_on_body_parts_id"
  end

  create_table "tokens", force: :cascade do |t|
    t.string "access_token"
    t.string "refresh_token"
    t.string "scope"
    t.string "token_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "expires_in"
    t.string "user_id", null: false
    t.index ["user_id"], name: "index_tokens_on_user_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "user_id", null: false
    t.integer "age"
    t.string "avatar"
    t.string "dob"
    t.string "display_name"
    t.string "first_name"
    t.string "full_name"
    t.string "gender"
    t.integer "height_cm"
    t.string "last_name"
    t.integer "weight_kg"
    t.json "other"
    t.index ["user_id"], name: "index_users_on_user_id", unique: true
  end

  add_foreign_key "liftsets", "equipment"
  add_foreign_key "liftsets", "motions"
  add_foreign_key "sessions", "body_parts", column: "body_parts_id"
end
