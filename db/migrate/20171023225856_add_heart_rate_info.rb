class AddHeartRateInfo < ActiveRecord::Migration[5.1]
  def change
    add_column :sessions, :completed_at, :datetime
    add_column :sessions, :heartrate, :text
  end
end
