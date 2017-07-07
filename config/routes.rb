Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
  root to: 'order_counts#order_count'
  get 'get_order_count' => 'order_counts#get_order_count'
end
