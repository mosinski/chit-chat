require File.expand_path('../boot', __FILE__)

require "rails/all"
require "net/http"

Bundler.require(:default, Rails.env) if defined?(Bundler)

module Chatter
  class Application < Rails::Application
    config.encoding = "utf-8"
    config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    config.i18n.default_locale = :en
    config.filter_parameters += [:password]
    config.time_zone = "Warsaw"
  end
end
