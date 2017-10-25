class AddStartedStoppedToLiftSets < ActiveRecord::Migration[5.1]
  def change
    add_column :liftsets, :started, :datetime
    add_column :liftsets, :stopped, :datetime
  end
end
