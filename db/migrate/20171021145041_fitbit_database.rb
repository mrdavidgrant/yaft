class FitbitDatabase < ActiveRecord::Migration[5.1]
  def change
    drop_table :users

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

  end
end
