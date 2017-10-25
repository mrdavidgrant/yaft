require 'test_helper'

class Api::V1::Users::LiftsetsControllerTest < ActionDispatch::IntegrationTest
  test "should get destroy" do
    get api_v1_users_liftsets_destroy_url
    assert_response :success
  end

end
