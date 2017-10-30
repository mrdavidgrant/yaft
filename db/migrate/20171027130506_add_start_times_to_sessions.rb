class AddStartTimesToSessions < ActiveRecord::Migration[5.1]
  def change
    add_column :sessions, :started_at, :datetime
  end
end
