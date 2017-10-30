require 'test_helper'

class MotionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get motions_index_url
    assert_response :success
  end

  test "should get create" do
    get motions_create_url
    assert_response :success
  end

  test "should get destroy" do
    get motions_destroy_url
    assert_response :success
  end

end
