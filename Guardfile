# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :compass do
  watch(%r{(.*)\.s[ac]ss$})
end

#guard 'jekyll-plus' do
#  watch /.*/
#  ignore /^_site/
#end

guard 'livereload' do
  watch(%r{_site/.+\.css})
  watch(%r{_site/.+\.html})
end
