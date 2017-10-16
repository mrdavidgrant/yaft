class CreateMotions < ActiveRecord::Migration[5.1]
  def change
    create_table :motions do |t|
      t.string :name

      t.timestamps
    end
  end
end
