class CreateLiftsets < ActiveRecord::Migration[5.1]
  def change
    create_table :liftsets do |t|
      t.integer :session_id
      t.integer :motion
      t.integer :reps
      t.integer :weight
      t.integer :rest

      t.timestamps
    end
  end
end
