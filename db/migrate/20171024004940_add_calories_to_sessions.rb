class AddCaloriesToSessions < ActiveRecord::Migration[5.1]
  def change
    add_column :sessions, :calories, :text
  end
end
